import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>{children}</div>
            <h2>auth layout </h2>
        </>

    )
}

export default layout