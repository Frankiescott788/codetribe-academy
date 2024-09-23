import { Button, Card, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import useDB from "../../../../hooks/useDatabase";

export default function Add() {
    const { setDescription, setNumberofbeds, setOccupancy, setRoomamenities, setRoomcategory, setRoomname, setRoomnumber, setRoompernight, setRoomtype, setPhoto, add_room, roomtype } = useDB();
    return (
        <section className="pb-10">
            <div className="mb-5">
                <p className="text-2xl text-center lg:text-start">Room <span className="text-[#FF9F1C]">Management</span> - Add a Room</p>
                <p className="text-tiny text-gray-400 text-center lg:text-start">Ensure guests have a great experience by listing detailed room information.</p>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-5 ">
                    <Input type="text" label="Room name" onChange={e => setRoomname(e.target.value)}/>
                    <Input type="text" label="Room number" className="my-2" onChange={e => setRoomnumber(e.target.value)}/>
                    <Input type="text" label="Price per night" onChange={e => setRoompernight(e.target.value)} />
                    
                </div>
                <div className=" col-span-12 lg:col-span-5">
                    <Input type="text" label="Number of beds" className="my-2" onChange={e => setNumberofbeds(e.target.value)}/>
                    <Input type="text" label="Max occupancy" onChange={e => setOccupancy(e.target.value)}/>
                    <Input type="file" className="my-2" onChange={e => setPhoto(e.target.files[0])}/>
                </div>
                <div className="col-span-12 lg:me-[10.5rem]">
                    <Textarea
                        label="Description"
                        placeholder="Type description here..."
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="col-span-12 lg:me-[10.5rem]">
                    <Textarea
                        label="Room Amenities"
                        placeholder="e.g WI-FI, Air Conditioning, TV, Mini Bar"
                        onChange={e => setRoomamenities(e.target.value)}
                    />
                </div>
            </div>
            <div className="py-4 flex justify-center lg:justify-start">
                <Button className="bg-[#FF9F1C] text-white shadowed-btn px-[5rem]" onClick={add_room}>Submit</Button>
            </div>
        </section>
    )
}