"use client"
const ErrorBoundary = ({ error }: { error: Error }) => {
    return (
        <>

            <div>Error is :{error.message}</div>
            {/* <div>Error Boundary</div> */}
        </>
    )
}

export default ErrorBoundary