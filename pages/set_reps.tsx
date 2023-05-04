import { NextPage } from 'next'
import MyContextProvider from '@/context/my-context-provider'
import { MyContext } from '@/context/my-context-provider'
import { MouseEventHandler, useContext, useState } from 'react'
import ExerciseCard from '@/Components/excerciseCard'
import Link from 'next/link'
import MinaPass from './minaPass'
import Button from '@/Components/button'
import TopNav from '@/Components/topNav'
import { ChangeEvent } from 'react'
import {Workout} from '@/types/workout'



interface Props {}


const workout1:Workout={


  musclegroup: "",
exercise: "",
sets: 0,
reps: 0,
weight: 0,
name: ""
 
}

const Set_reps: NextPage<Props> = ({}) => {

  const [selectedWorkout, setSelectedWorkout] = useState <string[]>([]);
  const workoutContext = useContext(MyContext)
// define sets, reps och name
  const { exercise, musclegroup,   name,   setName} = useContext(MyContext);


  // 
const [namn, setNamn] = useState("")
const [reps, setReps] = useState("")
const [sets, setSets] = useState("")


  const saveWorkout = (element: {exercise: string; musclegroup: string; reps: number; sets: number; name:string}) => {
    //spara exercise, musclegroup, reps, sets och name
    
  const newWorkout = `${element.exercise} ${element.musclegroup} ${element.reps} ${element.sets} ${element.name}`;
  
  
 setSelectedWorkout(prevState => [...prevState, newWorkout]);
 console.log(newWorkout)
  }

  function setInput(value: string) {
    throw new Error('Function not implemented.')
  }



 const handleChange = async ( name: string, exercise:string,
   reps: number, sets: number, musclegroup:string, workout: Workout, ) => {
    // TODO: Lägga till objektet Workout upp till databasen
  // 1. Gör en consol.log för att visa upp datan som skrivits in i inputs
  
  


  try {
const response = await fetch ('api/user', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body:JSON.stringify({...workout,name, exercise, reps, sets, musclegroup,}),
});

const data = await response.json();
console.log(data)

  }catch(error){
    console.error(error);
  }



  
    console.log(namn, reps, sets, exercise, musclegroup)
  }
  const handleClick = () => {
    const parsedSets = parseInt(sets);
    const parsedReps = parseInt(reps);
    handleChange(name, exercise, parsedSets, parsedReps, musclegroup, workout1);
    console.log(handleChange);
    
    
  };

  return (
  <div>
    
    <div className='h-screen block '>
   <TopNav text={undefined}></TopNav>
    <br />
      <form className=' py-12 flex justify-center'>
      <input 
      type="text" 
      id='name'
      value={namn} 
      onChange={(e) => setNamn(e.target.value)} 
      
      required placeholder='Namnge ditt pass här...' 
      className=' flex w-50 h-6 text-center m-4'   ></input>
      </form> 
      <div className='flex m-4'>
    <div id='card' className='flex justify-between px-4 py-4 h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>{`${exercise}`}</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>{`${musclegroup}`}</div>

        </div>

        <div className=''>
        <form id='inputs' className='flex justify-center'>
        <input type="text" value={sets} 
      onChange={(e) => setSets(e.target.value)}   
       name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
            <div className=' text-center not-italic '> x </div>
            <input type='text' value={reps} 
      onChange={(e) => setReps(e.target.value)}  name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
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
    <Button text="Skapa pass >" onClick={handleClick} />
  </div>
</Link>

 
  </div>
  )
}

export default Set_reps