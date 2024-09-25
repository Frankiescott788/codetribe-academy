import { Button, Card, CardBody, CardHeader, Tooltip } from "@nextui-org/react";
import StatsChart from "../../../charts/chart";
import { useNavigate } from "react-router-dom";

export default function DashboardOverview() {
    const navigate = useNavigate();
    return (
        <section>
            <div className="flex justify-between mx-2">
                <div>
                    <p className="text-2xl">Good morning, frankie</p>
                    <p className="text-tiny text-gray-400">Dashboard overview</p>
                </div>
                <div>
                    <Tooltip content="Add a new room" showArrow placement="left">
                        <Button className="bg-[#FF9F1C] text-white px-[4rem] shadowed-btn flex" onClick={() => navigate('/admin/new')}>
                            <div>
                                New
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"white"} fill={"none"}>
                                    <path d="M16.2141 4.98239L17.6158 3.58063C18.39 2.80646 19.6452 2.80646 20.4194 3.58063C21.1935 4.3548 21.1935 5.60998 20.4194 6.38415L19.0176 7.78591M16.2141 4.98239L10.9802 10.2163C9.93493 11.2616 9.41226 11.7842 9.05637 12.4211C8.70047 13.058 8.3424 14.5619 8 16C9.43809 15.6576 10.942 15.2995 11.5789 14.9436C12.2158 14.5877 12.7384 14.0651 13.7837 13.0198L19.0176 7.78591M16.2141 4.98239L19.0176 7.78591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mx-2 my-3">
                <Card className="col-span-3 px-3 py-2">
                    <div className="flex justify-between px-1">
                        <div className="text-lg text-gray-500">Total Bookings</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#7cb518"} fill={"none"}>
                                <path d="M9.72727 2C6.46607 2 4.83546 2 3.70307 2.79784C3.37862 3.02643 3.09058 3.29752 2.8477 3.60289C2 4.66867 2 6.20336 2 9.27273V11.8182C2 14.7814 2 16.2629 2.46894 17.4462C3.22281 19.3486 4.81714 20.8491 6.83836 21.5586C8.09563 22 9.66981 22 12.8182 22C14.6173 22 15.5168 22 16.2352 21.7478C17.3902 21.3424 18.3012 20.4849 18.732 19.3979C19 18.7217 19 17.8751 19 16.1818V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M2 12C2 13.8409 3.49238 15.3333 5.33333 15.3333C5.99912 15.3333 6.78404 15.2167 7.43137 15.3901C8.00652 15.5442 8.45576 15.9935 8.60988 16.5686C8.78333 17.216 8.66667 18.0009 8.66667 18.6667C8.66667 20.5076 10.1591 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-[3rem]">
                        <p className="text-3xl text-gray-400">05</p>
                        <p className="mt-2 text-success-500">12%</p>
                    </div>
                </Card>

                <Card className="  lg:col-span-3 px-3 py-2">
                    <div className="flex justify-between px-1">
                        <div className="text-lg text-gray-500">Occupancy</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#7b2cbf"} fill={"none"}>
                                <path d="M22 17.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 12V10.2134C11 9.83272 10.9428 9.70541 10.6497 9.55538C10.0395 9.24292 9.29865 9 8.5 9C7.70135 9 6.96055 9.24292 6.35025 9.55538C6.05721 9.70541 6 9.83272 6 10.2134L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M18 12V10.2134C18 9.83272 17.9428 9.70541 17.6497 9.55538C17.0395 9.24292 16.2987 9 15.5 9C14.7013 9 13.9605 9.24292 13.3503 9.55538C13.0572 9.70541 13 9.83272 13 10.2134L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M21 12V7.36057C21 6.66893 21 6.32311 20.8079 5.99653C20.6157 5.66995 20.342 5.50091 19.7944 5.16283C17.5869 3.79978 14.8993 3 12 3C9.10067 3 6.41314 3.79978 4.20558 5.16283C3.65804 5.50091 3.38427 5.66995 3.19213 5.99653C3 6.32311 3 6.66893 3 7.36057V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-[3rem]">
                        <p className="text-3xl text-gray-400">05</p>
                        <p className="mt-2 text-success-500">12%</p>
                    </div>
                </Card>
                <Card className="col-span-3 px-3 py-2">
                    <div className="flex justify-between px-1">
                        <div className="text-lg text-gray-500">Revenue</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#2176ff"} fill={"none"}>
                            <path d="M12.002 9.00708C10.8974 9.00708 10.002 9.67865 10.002 10.5071C10.002 11.3355 10.8974 12.0071 12.002 12.0071C13.1065 12.0071 14.002 12.6787 14.002 13.5071C14.002 14.3355 13.1065 15.0071 12.002 15.0071M12.002 9.00708C12.8728 9.00708 13.6136 9.42448 13.8881 10.0071M12.002 9.00708V8.00708M12.002 15.0071C11.1311 15.0071 10.3903 14.5897 10.1158 14.0071M12.002 15.0071V16.0071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M13 2.50708C13 2.50708 12.6839 2.50708 12 2.50708C7.52166 2.50708 5.28249 2.50708 3.89124 3.89833C2.5 5.28957 2.5 7.52874 2.5 12.0071C2.5 16.4854 2.5 18.7246 3.89124 20.1159C5.28249 21.5071 7.52166 21.5071 12 21.5071C16.4783 21.5071 18.7175 21.5071 20.1088 20.1159C21.5 18.7246 21.5 16.4854 21.5 12.0071C21.5 11.3232 21.5 11.0071 21.5 11.0071" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M21.4883 2.49292L17.3125 6.67112M16.4883 3.01468L16.6065 6.10617C16.6065 6.83481 17.0416 7.2888 17.8341 7.34606L20.9581 7.49292" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="flex gap-[3rem]">
                        <p className="text-3xl text-gray-400">05</p>
                        <p className="mt-2 text-success-500">12%</p>
                    </div>
                </Card>
                <Card className="col-span-3 px-3 py-2">
                    <div className="flex justify-between px-1">
                        <div className="text-lg text-gray-500">Cancellation</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ef233c"} fill={"none"}>
                                <path d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M11.992 16H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 13L12 8.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-[3rem]">
                        <p className="text-3xl text-gray-400">05</p>
                        <p className="mt-2 text-success-500">12%</p>
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-12 my-5">
                <Card className=" col-span-12 lg:col-span-6 p-3">
                    <StatsChart />
                </Card>
            </div>
        </section>
    )
}