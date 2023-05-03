import React, { MouseEventHandler } from "react"

const Button = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | 
    React.ReactFragment | React.ReactPortal | null | undefined, onClick: MouseEventHandler<HTMLButtonElement> }) =>{
    return(
        <button className=" text-[color:white] text-x+l bg-ourcolor-red font-bold py-2 px-8 rounded" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button