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
        <div className="fixed bottom-25 left-1/2 transform -translate-x-1/2">
        
      <button  className=" text-[color:white] text-x+l bg-red-500 text-white font-bold py-2 px-8 rounded">
        Skapa pass {">"}
</button>
</div>
        </Link>
        
        </>
    )
}

export default ExercisePage