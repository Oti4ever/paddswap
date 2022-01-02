import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

// type assertions

export const User = () => {
    // useState future value
    const [user, setUser] = useState<AuthUser | null> (null)

    const handleLogin = () => {
        setUser({
            name: 'Otinomo',
            email: 'oti4ever@protonmail.com'
        })  
    }
    
    const handleLogout = () => {
        setUser(null)
    }
    
    return (
        <div>

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}> Logout</button>

            <div>User Name is { user?.name}</div>
            <div>User Email is { user?.email }</div>

        </div>
    )
} 