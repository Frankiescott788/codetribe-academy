import { useState } from 'react';
import { Button, Card, DatePicker, Input } from "@nextui-org/react";

export default function Checkout() {
  const [guests, setGuests] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [nights, setNights] = useState(null);

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate - checkInDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      console.log(nights)
    }
  }
  return (
    <section className="px-5 pt-[20dvh]">
      <div>
        <div>
          {/* Add any content if needed */}
        </div>
        <div className="grid grid-cols-12">
          <Card className="col-span-4 p-3">
            <Input
              placeholder="Enter number of guests here"
              label="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className='my-3'
            />
            <Input
            type='number'
              placeholder="Enter number of nights here"
              label="Number of nights"
              value={nights}
              onChange={(e) => setNights(e.target.value)}
            />
            <DatePicker
              label="Check in"
              className="my-3"
              value={checkInDate}
              onChange={(date) => setCheckInDate(date)} // Expecting date to be a Date object
            />
            <DatePicker
              label="Check out"
              value={checkOutDate}
              onChange={(date) => setCheckOutDate(date)} // Expecting date to be a Date object
            />
            <button onClick={calculateNights}>
                ffff
            </button>
          </Card>
        </div>
      </div>
    </section>
  )
}
