import Link from "next/link";

interface Props {
    data: any
}

function Set_repsPage() {
    return (
        <>
        <Link href ="/set_reps">
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        
      <button className=" text-[color:white] text-x+l bg-red-500 text-white font-bold py-2 px-8 rounded">
        Gå vidare {">"}
</button>
</div>
        <></> 
        </Link>
        </>
    )
}

export default Set_repsPage