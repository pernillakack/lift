import { NextPage } from 'next'
import { Workout } from '@/types/workout'
import Button from '@/Components/button'
import Link from 'next/link'
import { MouseEvent } from 'react'




const handleClick = async () => {
  
  console.log("Gå till loggade pass")

}

type Props = {
  workouts: Workout []
}



const RenderWorkout: NextPage<Props> = ({workouts}) => {
  return( 
<div className=' uxBackground h-screen block '> 
    <form className=' py-12 flex justify-center'>
    <div >
    <h1>Tisdag</h1>
    </div>
    </form>
    
   
    <ul >
        <li className='flex justify-between' >
            <div className=' ml-6'>{} SET</div>
            <div> Reps</div>
            <div className=' mr-6'>{} Kg</div>
        </li>
    </ul>
    <Link href="/minaPass">
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
    <Button text="Logga pass >" onClick={handleClick} />
  </div>
</Link>
    
  </div>

   

  
 
  
  
  )}


export default RenderWorkout