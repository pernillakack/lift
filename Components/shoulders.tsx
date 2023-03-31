function Shoulders() {
   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
return (
    <>
    <form>
    <ul className="exercises">
       
    </ul>
      <select name ="axlar">
        <option className="">Axlar</option>
      {shoulders.map(shoulders =>
        <option className="" key={shoulders} onClick={(event)=> console.log(shoulders)}>{shoulders}</option>)}  
      {/*  <option value="Axlar">Axlar</option>
        <option value="Overhead dumbbell press">Overhead dumbbell press</option>
        <option value="Overhead barbell press">Overhead barbell press</option>
        <option value="Face pull">Face pull</option>
        <option value="Dumbbell rear delt row">Dumbbell rear delt row</option>
        <option value="Lateral dumbbell raises ">Lateral dumbbell raises</option>
        <option value="Shrugs">Shrugs</option>*/}
      </select>
      <br />
      <select name ="ben">
        <option value="Ben">Ben</option>
      
      </select>
    </form>
    </>
)
}
export default Shoulders;