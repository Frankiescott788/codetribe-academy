import { Card, Skeleton } from "@nextui-org/react";

export default function Isloading() {
    return (
        <section className="px-3 py-3 place-items-center flex justify-center pt-[20rem]">
            <div>
                <button className="loader__btn">
                    <div className="loader"></div>
                    Loading ...
                </button>
            </div>
        </section>
    )
}