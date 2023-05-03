import { NextPage } from 'next'
import MyContextProvider from '@/context/my-context-provider'
import { MyContext } from '@/context/my-context-provider'
import { MouseEventHandler, useContext, useState } from 'react'
import ExerciseCard from '@/Components/excerciseCard'
import Link from 'next/link'
import MinaPass from './minaPass'
import Button from '@/Components/button'

interface Props {}

const Set_reps: NextPage<Props> = ({}) => {

  const [selectedWorkout, setSelectedWorkout] = useState <string[]>([]);
  const workoutContext = useContext(MyContext)
// define sets, reps och name
  const { exercise, muscleGroup, reps, sets , name, setReps, setSets, setName} = useContext(MyContext);


  const saveWorkout = (element: {exercise: string; musclegroup: string; reps: number; sets: number; name:string}) => {
    //spara exercise, muscleGroup, reps, sets och name
  const newWorkout = `${element.exercise} ${element.musclegroup} ${element.reps} ${element.sets} ${element.name}`;
  
  
 setSelectedWorkout(prevState => [...prevState, newWorkout]);
 console.log(newWorkout)
  }

  function setInput(value: string) {
    throw new Error('Function not implemented.')
  }



  const handleChange = () => {
    // TODO: Lägga till objektet Workout upp till databasen
  // 1. Gör en consol.log för att visa upp datan som skrivits in i inputs
    console.log("Hej")
  }

  return (
  <div>
    
    <div className='h-screen block '>
      <form className=' flex justify-center'>
      <input 
      type="text"  
      required placeholder='Namnge ditt pass här...' 
      className=' flex w-50 h-6 text-center m-4'  ></input>
      </form> 
      <div className='flex m-4'>
    <div id='card' className='flex justify-between px-4 py-4 h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>{`${exercise}`}</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>{`${muscleGroup}`}</div>

        </div>

        <div className=''>
        <form id='inputs' className='flex justify-center'>
        <input type="text" name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
            <div className=' text-center not-italic '> x </div>
            <input type='text' name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
        </form>
        <div className=' flex'>
            <div id='sets' className=' py-2 ml-2 mr-2 not-italic font-normal text-xs'>Sets</div>
            <div id='reps' className=' py-2 ml-4 mr-2 text-xs'>Reps</div> 
        </div>
        </div>
        </div>
        </div>
    </div>
    <Link href="/minaPass">
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
    <Button text="Skapa pass >" onClick={handleChange} />
  </div>
</Link>

 
  </div>
  )
}

export default Set_reps