import { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Button, useDisclosure, Modal, ModalFooter, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import imageone from "../../../assets/pictures/Contemporary Elegance_ Serene Earth-Toned Bedroom.jpg";
import imagetwo from "../../../assets/pictures/Modern Hotel Room Interior.jpg";
import imagethree from "../../../assets/pictures/download.jpg";
import imagefour from "../../../assets/pictures/Warm Elegance_ A Modern Bedroom with Mid-Century Touches.jpg"
import { RiStarFill } from "@remixicon/react";
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../../../store/crudReducer';
import { useNavigate } from 'react-router-dom';

export default function Cards() {

    const { rooms, state, error } = useSelector(state => state.rooms);
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [book, setBook] = useState(null);

    const navigate = useNavigate();



    useEffect(() => {
        dispatch(getRooms())
    }, [])

    if (state === 'loading') {
        return (
            <p>Loading...</p>
        )
    }
    if (state === 'failed') {
        return (
            <p>Failed</p>
        )
    }

    return (
        <section className=" mt-10 lg:mt-[25dvh]">
            <div className="text-center">
                <p className="text-3xl ">Explore Our <span className="text-[#FF9F1C]">Exclusive</span> Rooms</p>
                <p className="text-gray-400 text-tiny lg:px-[20rem]">Discover a range of luxurious accommodations designed to offer you comfort and style. Choose from our curated selection of rooms and suites to find the perfect stay for your needs.</p>
            </div>
            <div className="grid grid-cols-12 my-10 gap-5">
                {rooms.length === 0 && <p>No rooms found</p>}
                {rooms.length > 0 && rooms.slice(0, 6).map((room, i) => (
                    <Card isFooterBlurred className="w-full h-[25rem] col-span-12 lg:col-span-3 shadow-none border rounded-md" key={i}>
                        <CardHeader className="absolute z-10 flex justify-between">
                            <p className=" uppercase font-bold bg-white flex px-1 rounded-full gap-1">
                                <div className="mt-1">
                                    <RiStarFill size={13} className="text-yellow-400" />
                                </div>
                                <div className="text-sm text-gray-400">
                                    4.5
                                </div>

                            </p>
                            <div className="bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#9ca3af"} fill={"none"}>
                                    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-[40dvh] scale-125 -translate-y-6 "
                            src={room.Photo}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                {room.roomname}
                            </div>
                            <div className='text-tiny text-gray-400 truncate w-[50px] '>
                                {room.roomamenities}
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex gap-1'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ff9f1c"} fill={"none"}>
                                            <path d="M2 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 8.5L22 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 8.5L6 10.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 15.5H6M22 15.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-tiny text-gray-500 mt-1"> {room.numberofbeds} Beds </p>
                                </div>

                                <div className='flex gap-1'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ff9f1c"} fill={"none"}>
                                            <ellipse cx="15.5" cy="11" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11" stroke="currentColor" strokeWidth="1.5" />
                                            <ellipse cx="8.5" cy="4" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6 21C4.10819 20.7698 2.36991 20.1745 2 19L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M15 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <p className="text-tiny text-gray-500 mt-1"> {room.roomPernight}/night </p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full" onClick={() => {
                                    onOpen();
                                    setBook(room);
                                    
                                }}>Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>

                ))}
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>

                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader>
                                    <p> {book.roomname} </p>
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <Image src={book.Photo} />
                                        <p>{book.description}</p>
                                        <div className='flex gap-1'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ff9f1c"} fill={"none"}>
                                                    <ellipse cx="15.5" cy="11" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M22 15.5C22 16.6046 19.0899 17.5 15.5 17.5C11.9101 17.5 9 16.6046 9 15.5" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M22 11V19.8C22 21.015 19.0899 22 15.5 22C11.9101 22 9 21.015 9 19.8V11" stroke="currentColor" strokeWidth="1.5" />
                                                    <ellipse cx="8.5" cy="4" rx="6.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M6 11C4.10819 10.7698 2.36991 10.1745 2 9M6 16C4.10819 15.7698 2.36991 15.1745 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M6 21C4.10819 20.7698 2.36991 20.1745 2 19L2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M15 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <p className="text-tiny text-gray-500 mt-1"> {book.roomPernight}/night </p>
                                        </div>

                                        <div className='flex gap-1 my-2'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ff9f1c"} fill={"none"}>
                                                    <path d="M2 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 8.5L22 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2 8.5L6 10.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2 15.5H6M22 15.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-tiny text-gray-500 mt-1"> {book.numberofbeds} Beds </p>
                                        </div>
                                        <p>{book.roomamenities}</p>

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                <Button className='bg-danger-100 text-danger-500 px-[2rem] ' onClick={onClose}>Cancel</Button>
                                    <Button className='bg-[#ff9f1c] text-white px-[2rem]' onClick={() => {
                                        navigate('/checkout/' + book.roomname)
                                    }}>Proceed</Button>
                                </ModalFooter>
                            </>


                        )}
                    </ModalContent>

                </Modal>
            </div>
        </section>
    )
}