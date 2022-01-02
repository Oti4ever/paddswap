import React from "react"

type ButtonProps = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    const { handleClick } = props
    
    return (
        <button onClick={(event) => handleClick(event, 1)}>Click</button>
    )
}