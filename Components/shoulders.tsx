import { ChangeEvent, useEffect, useState } from "react";
import Legs from "./legs";
import Link from "next/link";


   const shoulders = ["Overhead dumbbell press","Overhead barbell press","Face pull","Dumbbell rear delt row","Lateral dumbbell raises","Shrugs"]
   const legs = ["Deadlift", "Leg curl", "Leg press", "Leg exstension", "Bulgarian split squat", "Front squat", "Good mornings", "Squats", "Romanian deadlift", "Sitting calf press", "Standing calf press"]
   
   
   function Muscles() {
    const [selectedExercise, setSelectedExercise] = useState<string>("default");
    const [exercises, setExercises] = useState<string[]>([]);
  
    //  localStorage för att ladda tidigare valda övningar
    useEffect(() => {
      const storedExercises = localStorage.getItem("exercises");
      if (storedExercises) {
        setExercises(JSON.parse(storedExercises));
      }
    }, []);
  
    //  Använder LocalStorage för att spara övningar när det ändras
    useEffect(() => {
      localStorage.setItem("exercises", JSON.stringify(exercises));
    }, [exercises]);
  
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedExercise = event.target.value;
      setExercises([...exercises, selectedExercise]);
      setSelectedExercise("default");
    };
  
    return (
      <>
        <div className="justify-center items-center h-screen mt-12">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
  
          <h1 className="flex justify-center mt-12 red-text">ÖVNINGAR</h1>
  
  
  
          <select
            className="mt-5"
            name="exercises"
            id="exercises"
            onChange={handleChange}
            value={selectedExercise}
          >
         <option value="default" disabled>
              Axlar
            </option> 
      
  
            {shoulders.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
  
          <br />
  
          <select
            name="exercises"
            id="exercises"
            onChange={handleChange}
            value={selectedExercise}
          >
            <option value="default" disabled>
              Ben
            </option>
  
            {legs.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
  
          <br />
          <br />
          <br />
  
          <h2>Valda övningar här:</h2>
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
          <br />
          <br />
  
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
            <Link href={"/pass"}>
              <button className=" text-x+l bg-red-500 text-white font-bold py-2 px-8 rounded">
                Gå vidare och skapa pass
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  export { shoulders, legs };
  export default Muscles
