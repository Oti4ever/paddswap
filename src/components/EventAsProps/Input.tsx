import React from "react"

type InputProps = {
    value: string
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
    // handleClick : (event : React.MouseEvent<HTMLInputElement>, id: number) => void
}

export const Input = ({value, handleChange}: InputProps) => {
    // const { value, handleChange } = props
    

    const handleInputChage = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChage}
        />
    )
}