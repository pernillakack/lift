import React, { useContext, useState } from 'react'
import { TiPlus } from 'react-icons/ti'
import MyContextProvider, {MyContext} from '@/context/my-context-provider';
import { chosenExercise } from '@/functions/chosenEx';



const ExerciseCard = () => {

  const [selectedExercise, setSelectedExercise] = useState<string[]>([]);
  const exerciseContext = useContext(MyContext);

  const handleExercise = (element: { id: number; exercise: string; muscleGroup: string; }) => {
    // Spara det valda objektet i en Array och färga bakgrunden grön
    const newExercise = `${element.exercise} ${element.muscleGroup}`;
    setSelectedExercise(prevState => [...prevState, newExercise]);

// Sätt övningens värden i ExerciseContext

exerciseContext.setExercise(element.exercise);
exerciseContext.setMuscleGroup(element.muscleGroup);



  }

  const exercises = chosenExercise()

  const listExercises = exercises.map(
    (element) => (
      <li key={`${element.id}`}>
        <div onClick={() => handleExercise(element)} id='card' className='flex justify-between px-4 py-4 h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px] m-4'>
          <div id='info' className='flex flex-col'>{`${element.exercise}`}
            <div id='muskelgrupp' className='w-24 h-4 not-italic font-normal text-xs leading-4'>{`${element.muscleGroup}`}</div>
          </div>
          <div id='container plus' className='flex my-4 ml-1 mr-2'>
            <div><TiPlus className='mb-8 w-[18px] h-[18px] top-[33px] left[297px]' /></div>
          </div>
        </div>
      </li>
    )
  )

  return (
    <>
      <div>
        <h1>ÖVNINGARNA</h1>
        <ul>
          {listExercises}
        </ul>
      </div>
    </>
  )
}

export default ExerciseCard
