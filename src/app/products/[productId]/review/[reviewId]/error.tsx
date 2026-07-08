"use client"
const ErrorBoundary = ({error}:{error:Error}) => {
    return (
        <div>{error.message}</div>
        // <div>Error Boundary</div>
    )
}

export default ErrorBoundary