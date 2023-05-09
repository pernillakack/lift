import { Workout } from "@/types/workout";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Button from "@/Components/button";

type Props = {
    workouts: Workout []
    button: React.ReactElement<{ onClick: ()=> void}>
}

function RenderWorkout(props: {
    button: any; workout: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined 
}, children:{eventhandler: any}) {
    return (
        <>
        <Link href ="/renderWorkout">
            {props.workout}
        </Link>
        {props.button}
        </>
    )
}

export default RenderWorkout