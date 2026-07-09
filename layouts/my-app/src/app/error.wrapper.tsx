"use client"
import { useState } from "react"
import "./globals.css"

interface WrapperProp {
    children: React.ReactNode;
}

const ErrorSimulator = ({
    message = "An error occured",
}: {
    message?: string
}) => {

    const [error, setError] = useState(false);

    if (error) {
        throw new Error(message);
    }

    return (
        <button onClick={() => setError(true)}>
            Simulate Error
        </button>
    )
}

export const ErrorWrapper = ({ children }: WrapperProp) => {
    return (
        <div className="relative flex flex-col border-2 border-red-500 p-4 my-4">
            <div className="absolute top-0 left-4 -translate-y-1/2 bg-gray-200 text-black rounded-md px-2">
                <ErrorSimulator message="Simulated error in root layout" />
            </div>
            {children}
        </div>
    )
}