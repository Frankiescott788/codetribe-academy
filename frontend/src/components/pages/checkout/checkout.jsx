import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  DatePicker,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import useDB from "../../../hooks/useDatabase";
import { useParams } from "react-router-dom";

export default function Checkout() {
  const [guests, setGuests] = useState(""); // Guests input
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [nights, setNights] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [pricePerNight, setPricePerNight] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const { onClose, onOpen, onOpenChange, isOpen } = useDisclosure();
  const { check_out, checkout_room } = useDB();

  const { id } = useParams();

  // Room prices
  const roomPrices = {
    standard: 200,
    deluxe: 500,
    suite: 1000,
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      calculateNights();
    }
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    check_out(id);
  }, []);

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(new Date(checkOutDate) - new Date(checkInDate));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      calculateAmount(diffDays);
    }
  };

  const calculateAmount = (nights) => {
    const guestCount = parseInt(guests) || 1;
    const amount = nights * pricePerNight * guestCount;
    setTotalAmount(amount);
  };

  const handleRoomChange = (e) => {
    setPricePerNight(
      checkout_room.roomPernight.slice(1, checkout_room.roomPernight.length - 0)
    );
    if (nights > 0) {
      calculateAmount(nights);
    }
  };


  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ASAMJTODZlQP4ZfjBAiEsfndZkbUOv7kCPaTXPKBypHFdg3FaXyVO0t1FYLvfdjhijZSpoKQkAAIMFIg",
      }}
    >
      <section className="px-10 pt-[15dvh] ">
        <div className="grid grid-cols-12 ">
          <Card className="col-span-5 p-3">
            <Input
              placeholder="Enter number of guests here"
              label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="my-3"
            />

            <Input
              type="number"
              placeholder="Number of nights will appear here"
              label="Number of nights"
              value={nights ?? ""}
              readOnly
              className="hidden"
            />

            <DatePicker
              label="Check-in"
              className="my-3"
              value={checkInDate}
              onChange={(date) => setCheckInDate(date)}
            />
            <DatePicker
              label="Check-out"
              value={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
            />
            <Button
              onPress={() => {
                handleRoomChange();
                onOpen();
              }}
              className="mt-5 bg-[#ff9f1c] shadowed-btn text-white"
            >
              Checkout
            </Button>
            <div className="flex justify-center">
           
            <p className="mt-3 text-tiny">Powered by</p>
            <Image src="https://cdn-icons-png.freepik.com/256/14881/14881340.png?semt=ais_hybrid" className="h-10"/>

            </div>

            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              backdrop="blur"
              scrollBehavior="inside"
            >
              <ModalContent>
                <ModalHeader>Payment Details</ModalHeader>
                <ModalBody>
                  {totalAmount && (
                    <div className="mt-5">
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: totalAmount.toFixed(2),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            alert(
                              `Transaction completed by ${details.payer.name.given_name}`
                            );
                            onClose();
                          });
                        }}
                        onError={(err) => {
                          console.error("PayPal Checkout onError", err);
                        }}
                      />
                    </div>
                  )}
                </ModalBody>
              </ModalContent>
            </Modal>
          </Card>
          <div></div>
          <div className="col-span-5">
            <Card>

              <Image src={checkout_room.Photo} className="h-[20rem]" />
              <CardBody className="absolute z-10 bottom-0 backdrop-blur-sm">
                <p className="text-white">{checkout_room.roomPernight}/night</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </PayPalScriptProvider>
  );
}
