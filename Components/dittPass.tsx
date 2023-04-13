import { useState, useEffect } from "react";

interface Exercise {
 exercise: string;
 category: string;
}

function DittPass() {
 const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

 useEffect(() => {
 const exercises = localStorage.getItem("exercises");

 if (exercises) {
 setExerciseList(JSON.parse(exercises));
 }
 }, []);

 return (

 <>

<div className=" text-gray-600 items-center h-screen" >
    <p>Valda övningar</p>
</div>
<div className="">
<div className="">
<ul className="p-4 mx-auto mt-3">
     {exerciseList.map((exercise, index) => (
    <li key={index}>
Exercise: {exercise.exercise}
<br />
{/*Category: {exercise.category}  */}
</li>
))}

        </ul>
    </div>
</div>
</>
    );
}

export default DittPass;

