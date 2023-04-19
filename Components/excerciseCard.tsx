import React, { useState } from 'react'
import { TiPlus } from 'react-icons/ti'

const ExerciseCard = () => {
  const [selectedExercise, setSelectedExercise] = useState<string[]>([]);

  const handleExercise = (element: { id: number; exercise: string; muscleGroup: string; }) => {
    // Spara det valda objektet i en Array och färga bakgrunden grön
    const newExercise = `${element.exercise} ${element.muscleGroup}`;
    setSelectedExercise(prevState => [...prevState, newExercise]);
  }

  const exercises = [
    {
      id: 0,
      "exercise": "Overhead dumbell press",
      "muscleGroup": "Axlar"
    },
    {
      id: 1,
      "exercise": "Face pull",
      "muscleGroup": "Axlar"
    },
    {
      id: 2,
      "exercise": "Leg curl",
      "muscleGroup": "Ben"
    },
    {
      id: 3,
      "exercise": "Front squat",
      "muscleGroup": "Ben"
    },
    {
      id: 4,
      "exercise": "Cable curl",
      "muscleGroup": "Biceps"
    }
  ]

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
        <h1>ÖVNINGAR</h1>
        <ul>
          {listExercises}
        </ul>
        <h1>VALDA ÖVNINGAR</h1>
        <ul>
          {selectedExercise.map((exercise, index) => <li key={index}>{exercise}</li>)}
        </ul>
      </div>
    </>
  )
}

export default ExerciseCard
