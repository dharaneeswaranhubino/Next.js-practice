"use client"
import React from 'react'

const GlobalError = () => {
    return (
        <html>
            <body>
                <h1>Something went wrong</h1>
                <button onClick={() => { window.location.reload() }}>Refresh</button>
            </body>
        </html>
    )
}

export default GlobalError