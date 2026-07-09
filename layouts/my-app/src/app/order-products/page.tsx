"use client"

import { useRouter } from "next/navigation";

const OrderProducts = () => {

    const router = useRouter();
    const handleClick = () => {
        console.log("order products");
        router.push("/")

    }
    return (
        <>
            <div>Order Products</div>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default OrderProducts