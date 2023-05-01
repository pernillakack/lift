import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

interface Props {
    data: any
}

function Set_repsPage(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <>
        <Link href ="/set_reps">
            {props.children}
        </Link>
        </>
    )
}

export default Set_repsPage