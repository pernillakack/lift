import { NextPage } from 'next'
import { Workout } from '@/types/workout'


type Props = {
  workouts: Workout []
}

const RenderWorkout: NextPage<Props> = ({workouts}) => {
  return( 
  <div className="">
    <form className=' py-12 flex justify-center'>
    <div >
    <h1>Face Pull</h1>
    </div>
    </form>
    
   
    <ul >
        <li className='flex justify-between' >
            <div className=' ml-6'>{} SET</div>
            <div> Reps</div>
            <div className=' mr-6'>{} Kg</div>
        </li>
    </ul>

  </div>
  )
}


export default RenderWorkout