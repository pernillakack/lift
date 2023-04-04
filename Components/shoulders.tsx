


function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   
   

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
    <form className="px-14">
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
    
    </div>
    
    </>
)
}
export default Shoulders;