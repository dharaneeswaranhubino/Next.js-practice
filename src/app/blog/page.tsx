import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: {
        absolute: "blog",
    }
}

const Blogs = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay");
        }, 2000);
    })
    return (
        <div>My Blogs</div>
    )
}

export default Blogs