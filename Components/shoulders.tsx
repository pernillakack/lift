import { useState } from "react";
import Legs from "./legs";

function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   const legs = ["Deadlift", "Leg curl", "Leg press", "Leg exstension", "Bulgarian split squat", "Front squat", "Good mornings", "Squats", "Romanian deadlift", "Sitting calf press", "Standing calf press"]
   
   
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
      <br />                                        
      <select name ="ben">
        <option className="">Ben</option>
      {legs.map(legs =>
        <option className=" list-item active" key={legs.length} onClick={() =>setChoices([legs])}>{legs}</option>)}  
      </select>         
      </ul>
    
    <h2 className="">Valda övningar:</h2>
    <div>
      <ul>
        {choices.map(choices=>
        <li className=" list-item active" key={choices} onChange={()=>([choices])}>{[choices]}</li>)}
       {/*  <li className=" list-item active" onChange={()=>({...choices})} >{[...choices]}</li>*/}
        
      </ul>
     
    </div>
    </div>
    </div>
    
    </>
)
}
export default Shoulders;