import { NextPage } from 'next'
import { Workout } from '@/types/workout'
import Button from '@/Components/button'
import Link from 'next/link'
import { MouseEvent } from 'react'
import { useRouter } from 'next/router'




const handleClick = async () => {
  
  console.log("Gå till loggade pass")

}

type Props = {
  workouts: Workout []
  
}



const RenderWorkout: NextPage<Props> = ({}) => {
  const router = useRouter()
  const {name, sets, reps, exercise} = router.query
  return( 
<div className=' uxBackground h-screen block '> 
    <form className=' py-8 flex justify-center'>
    <div >
    <h1>{`${name}`}</h1>
    </div>
    </form>
    
   
    <ul >
      <form className='uxShadow rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px]'>
      <div className=' py-6 flex justify-center'>
      <h2>{`${exercise}`}</h2>
      </div>
      {Array.from({ length: sets }).map((_, i) => (
        <li className='flex justify-between' >
            <div className=' ml-6 py-2 mt-2'>SET X</div>
            <div className='py-2'>
            <input type="text" placeholder={`${reps}`} className='  mb-1 ml-2 mr-2 w-8 rounded-full box-border border-2 shadow-lg text-center'/>
            <div>Reps</div>
            </div>
            <div className=' py-2 mr-4'>
            <input type="text" placeholder='0' className=' mb-1 ml-2 mr-2 w-8 rounded-full box-border border-2 shadow-lg text-center'/>
            <div className=' '>Kg</div>
            </div>
        </li>
      ))}
      </form>
    </ul>
    
    <Link href="/minaPass">
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
    <Button text="Logga pass >" onClick={handleClick} />
  </div>
</Link>
    
  </div>

   

  
 
  
  
  )}


export default RenderWorkout