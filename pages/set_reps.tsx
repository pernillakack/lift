import { NextPage } from 'next'
import { MyContext } from '@/context/my-context-provider'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useContext, useState } from 'react'
import Link from 'next/link'
import Button from '@/Components/button'
import TopNav from '@/Components/topNav'
import { Workout } from '@/types/workout'
import { useRouter } from 'next/router'

interface Props {
  workouts: Workout []
}

const Set_reps: NextPage<Props> = ({workouts}) => {

  const router = useRouter()

  //const{selectedExercise} = router.query

 // console.log(selectedExercise)
  
   const selectedExercise = router.query.selectedExercise && typeof router.query.selectedExercise === 'string' ? router.query.selectedExercise : "";
   const exercises = JSON.parse(selectedExercise)
   console.log("Den parsade selectedExercise, hämtad med url som heter exercises: ", exercises)

  //const [selectedExercise, setSelectedExercise] = useState<string[]>([]);

  // const [selectedWorkout, setSelectedWorkout] = useState <string[]>([]);
 // const [selectedExercise] = useState<{ nr: number; exercise: string; muscleGroup: string}[]>([]);
  console.log("Inne i set_reps: selectedExercise: ",selectedExercise)

 // console.log("selectedWorkout: ",selectedWorkout)
  
  const workoutContext = useContext(MyContext)
  console.log("workoutContext: ",workoutContext)
  
 
  console.log("Alla objekt i selectedExercise: ")
  //selectedExercise.forEach(object => {
 //   console.log(JSON.stringify(object))
 // })
  
  
  
  
  
  const { exercise, musclegroup,   } = useContext(MyContext);


  // define sets, reps , weigth, id och name
const [name, setName] = useState("")
const [reps, setReps] = useState(0)
const [weight, setWeight] = useState(5)
// const [_id, setId] = useState(ObjectId().toString());
  const [_id, setId] = useState(null)
const [sets, setSets] = useState(0)


  const saveWorkout = (element: {exercise: string; musclegroup: string; reps: number; sets: number; name:string;}) => {
    //spara exercise, musclegroup, reps, sets och name
    
  const newWorkout = `${element.exercise} ${element.musclegroup} ${element.reps} ${element.sets} ${element.name}`;


  
  
 //setSelectedWorkout(prevState => [...prevState, newWorkout]);
 console.log(saveWorkout)
  }

  function setInput(value: string) {
    throw new Error('Function not implemented.')
  }



 const handleClick = async () => {
    // TODO: Lägga till objektet Workout upp till databasen
  const saveWorkout = [name,{ musclegroup, sets, reps, exercise, weight }]
  // 
  try {
    console.log("saveWorkout inuti handleClick i set_reps:", [saveWorkout])
const response = await fetch ('api/user/newWorkout', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body:JSON.stringify([saveWorkout]),
});

const data = await response.json();
// Den här consolge.log läses inte av 
console.log(" Hallå?")

  }catch(error){
    console.error(error);
  }

  // Den här läses av
    console.log(saveWorkout)
  }
 

  return (
  <div>

    
    <div  className=' uxBackground h-screen block '>
   <TopNav activeButton={'set_reps'}></TopNav>
    <br />
      <form className=' pt-20 flex justify-center'>
      <input 
      type="text" 
      id='name'
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      required placeholder='Namnge ditt pass här...' 
      className=' flex w-50 h-7 text-center m-4'   ></input>
      </form> 

      {exercises.map((index: { nr: number, exercise: string, muscleGroup: string, sets: number, reps: number }) =>(
      <div key={index.nr}>
      <div className='flex m-4 py-0'>
        <div id='card' className='flex justify-between px-4 pb-8 h-20 bg-white uxShadow rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div className=' py-3' id='container'>

            <div id='övning'className='  flex'>{`${index.exercise}`}</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>{`${index.muscleGroup}`}</div>
            
        </div>
        <div className=''>
        <form id='inputs' className='flex justify-center py-3'>
        <input type="text" value={index.sets} 
      onChange={(e) => setSets(parseInt(e.target.value))}   
       name='message' required placeholder='0' className=' mb-1  ml-2 mr-2 w-8 rounded-full box-border border-2 shadow-lg text-center'></input>
            <div className=' text-center not-italic '> x </div>
            <input type='text' value={index.reps} 
      onChange={(e) => setReps(parseInt(e.target.value))}  name='message' required placeholder='0' className='  mb-1 ml-2 mr-2 w-8 rounded-full box-border border-2 shadow-lg text-center'></input>
        </form>
        <div className=' flex'>
            <div id='sets' className='  ml-2 mr-2 not-italic font-normal text-xs '>Sets</div>
            <div id='reps' className=' mt-0  ml-4 mr-2 text-xs  '>Reps</div> 
        </div>
        </div>
        </div>
        </div>
        </div>
        )
        )}
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