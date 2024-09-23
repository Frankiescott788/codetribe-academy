import { Button, Card, CardFooter, CardHeader, Image, Input } from "@nextui-org/react";
import { RiStarFill } from "@remixicon/react";

export default function ExploreRooms() {
    return (
        <section className="pt-[15dvh] px-5">
            <div> 
                <div className="flex justify-between mb-10">
                    <p className="text-2xl">
                        Explore
                    </p>
                    <div className="w-[20rem]">
                        <Input type="text" placeholder="search..." startContent={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#000000"} fill={"none"}>
                                <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                        } />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <Card isFooterBlurred className="w-full h-[50dvh] col-span-12 lg:col-span-3 shadow-none border rounded-md">
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
                            src={"https://assets.lummi.ai/assets/QmRwbGNehbti3EhgxJ4R4srxv2bE4pgpj3FNYB6quTqYYD?auto=format&w=1500&quot"}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                <p>R500/night</p>
                                <p className="text-tiny text-gray-500">2 rooms</p>
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full">Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card isFooterBlurred className="w-full h-[50dvh] col-span-12 lg:col-span-3 shadow-none border rounded-md">
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
                            src={"https://assets.lummi.ai/assets/QmRwbGNehbti3EhgxJ4R4srxv2bE4pgpj3FNYB6quTqYYD?auto=format&w=1500&quot"}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                <p>R500/night</p>
                                <p className="text-tiny text-gray-500">2 rooms</p>
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full">Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card isFooterBlurred className="w-full h-[50dvh] col-span-12 lg:col-span-3 shadow-none border rounded-md">
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
                            src={"https://assets.lummi.ai/assets/QmRwbGNehbti3EhgxJ4R4srxv2bE4pgpj3FNYB6quTqYYD?auto=format&w=1500&quot"}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                <p>R500/night</p>
                                <p className="text-tiny text-gray-500">2 rooms</p>
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full">Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card isFooterBlurred className="w-full h-[50dvh] col-span-12 lg:col-span-3 shadow-none border rounded-md">
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
                            src={"https://assets.lummi.ai/assets/QmRwbGNehbti3EhgxJ4R4srxv2bE4pgpj3FNYB6quTqYYD?auto=format&w=1500&quot"}
                        />
                        <CardFooter className="bg-white block pb-[30pt]">
                            <div>
                                <p>R500/night</p>
                                <p className="text-tiny text-gray-500">2 rooms</p>
                            </div>
                            <div className="flex justify-center w-full my-2">
                                <Button className="bg-[#ff9f1c] text-white px-[7rem] shadowed-btn rounded-full">Book now</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}