type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0, name, isLoggedIn } = props
    
    return (
        <div>
            <h1>
                {
                    isLoggedIn ? `Hello ${name}, you have ${messageCount } messages` : "Welcome Guest"
                }
            </h1>
        </div>
    )
}