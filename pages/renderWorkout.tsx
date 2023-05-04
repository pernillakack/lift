import { GetServerSideProps, NextPage } from 'next'
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import { WorkoutModel } from '@/schemas/workoutSchema'

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
    
   {workouts.map((workout) =>())
    <ul key={workout._id}>
        <li className='flex justify-between' >
            <div className=' ml-6'> SET</div>
            <div>5 Reps</div>
            <div className=' mr-6'>0 Kg</div>
        </li>
    </ul>
  )
   ) 
   }
  
  </div>
  )
}

export default RenderWorkout

export const getServerSideProps: GetServerSideProps<any> = async () => {
  await connectToDatabase()
  const workouts = await WorkoutModel.find().lean().exec()

  const serializedWorkouts = workouts.map((workout) => {
    return {
      ...workout,
      _id: workout._id.toString(),
    }
  })
  return {
    props: {
      workouts: serializedWorkouts,
    },
  }
}