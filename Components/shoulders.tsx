import { useState } from "react";

function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   
   const [choices, setChoices] = useState<string[]>([""])

   return (
    <>
<div className=" flex-col justify-center items-center">
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
    <div className=" flex-col items-center space-y-4">
    <ul className="exercises">
      <select name ="axlar">
        <option className="">Axlar</option>
      {shoulders.map(shoulders =>
        <option className=" list-item active" key={shoulders.length} onClick={() =>setChoices([shoulders])}>{shoulders}</option>)}  
      </select>                                           
                
      </ul>
    
    <h2 className="">Valda övningar:</h2>
    <div>
      <ul>
        {choices.map(choices=>
        <li className=" list-item active" key={choices} onChange={()=>([choices])}>{choices}</li>)}
        
        
      </ul>
     
    </div>
    </div>
    </div>
    
    </>
)
}
export default Shoulders;