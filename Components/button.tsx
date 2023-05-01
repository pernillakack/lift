import React from "react"

const Button = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) =>{
    return(
        <button className=" text-[color:white] text-x+l bg-red font-bold py-2 px-8 rounded">
            {props.text}
        </button>
    )
}

export default Button