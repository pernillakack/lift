import { stringify } from "querystring";
import { MouseEvent, useState } from "react";


function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   
   

   return (
    <>
    <form>
    <ul className="exercises">
      <select name ="axlar">
        <option className="">Axlar</option>
      {shoulders.map(shoulders =>
        <option className=" list-item active" key={shoulders} onClick={() =>console.log(shoulders)}>{shoulders}</option>)}  
      </select>
      <br />
      <select name ="ben">
        <option value="Ben">Ben</option>
      
      </select>
      </ul>
    </form>
    
    
    </>
)
}
export default Shoulders;