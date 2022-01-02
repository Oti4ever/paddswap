
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    const {status} = props

    let message
        if (status === "loading") {
            message = "Loading..."    
        } else if (status === "success") {
            message = "Data fetched successfully!"
        } else if (status === "error") {
            message = "Data fetched successfully!"
        }

    return (
        <div>
            <h2>Status - {message}</h2>     
        </div>
    )
}