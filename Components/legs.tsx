import { useState } from "react";

function Legs() {
   const legs = ["Deadlift", "Leg curl", "Leg press", "Leg exstension", "Bulgarian split squat", "Front squat", "Good mornings", "Squats", "Romanian deadlift", "Sitting calf press", "Standing calf press"]
   
   const [choices, setChoices] = useState<string[]>(["",""])


   return (
    <>
<div className=" justify-center items-center h-screen ">
  
    <div className="px-14">
    <ul className="exercises">
      <select name ="ben">
        <option className="">Ben</option>
      {legs.map(legs =>
        <option className=" list-item active" key={legs.length} onClick={() =>setChoices([legs])}>{legs}</option>)}  
      </select>
      <br />
      <select name ="ben">
        <option value="Ben">Ben</option>
      
      </select>
      </ul>
    </div>
    <h2>Valda övningar:</h2>
    <div>
      <ul>
        {choices.map((choices)=>
        <li className=" list-item active" key={choices} onChange={() =>([choices])}>{choices}</li>)}
        
        
      </ul>
      <li>{choices}</li>
    </div>
    
    </div>
    
    </>
)
}
export default Legs;