import { useState } from "react";

function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   
   const [choices, setChoices] = useState<string[]>([""])

   return (
    <>
<div className=" justify-center items-center h-screen ">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
    <div className="px-14">
    <ul className="exercises">
      <select name ="axlar">
        <option className="">Axlar</option>
      {shoulders.map(shoulders =>
        <option className=" list-item active" key={shoulders.length} onClick={() =>setChoices([shoulders])}>{shoulders}</option>)}  
      </select>                                           
                
      </ul>
    </div>
    <h2>Valda övningar:</h2>
    <div>
      <ul>
        {choices.map(choices=>
        <li className=" list-item active" key={choices} onChange={()=>([choices])}>{choices}</li>)}
        
        
      </ul>
     
    </div>
    
    </div>
    
    </>
)
}
export default Shoulders;