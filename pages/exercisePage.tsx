import Link from "next/link";
import Image from "next/image";

// <>Skapa pass!</> 
function ExercisePage() {
    return (
        <>
    {/*}   <Image
  src="/styles/Ellipse.png"
  alt="#"
  width={100}
  height={100}
/>
    {*/}

        <Link href ="/exercises">
        <div className=" red ">Skapa pass</div>
        
        </Link>
        
        </>
    )
}

export default ExercisePage