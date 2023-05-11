import React, { MouseEventHandler } from "react"

const Button = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | 
    React.ReactFragment | React.ReactPortal | null | undefined, onClick: MouseEventHandler<HTMLButtonElement> }) =>{
    return(
        <button className=" text-[color:white] text-xl bg-ourcolor-red font-normal py-4 px-12 rounded-lg" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button