"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot password", href: "/forgot-password" },
]

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const [input, setInput] = useState("");

    const pathName = usePathname();

    return (
        <>
            <div>
                <div>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                {navLink.map((link) => {
                    const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
                    return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })}
                {children}
            </div>
            <h2>Auth Layout </h2>
        </>
    )
}

export default AuthLayout