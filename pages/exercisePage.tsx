import Link from "next/link";
import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

interface Props {
  data: any
}

function ExercisePage(props: {children: string| number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; } ) {
    return (
        <>
        <Link href ="/exercises">
          {props.children}
        </Link> 
        </>
    )
}

export default ExercisePage