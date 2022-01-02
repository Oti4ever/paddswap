import React from 'react'
import './Button.css'

type ButtonProps = {
    btnSize?: number 
    variant : 'primary' | 'secondary' | 'tertiary'
} & React.ComponentProps<'button'>


export const Button = ({btnSize, variant, children, ...rest} : ButtonProps) => {

    return (
        <>
            <button style= {{padding: `${btnSize}px`}}
                className={`class-with-${variant}`}
                {...rest}
            >
                {children}
            </button>
        </>
    )
}


