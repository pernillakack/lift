<<<<<<< Updated upstream
import { GetServerSideProps, NextPage } from 'next'
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import { WorkoutModel } from '@/schemas/workoutSchema'

type Props = {
  workouts: Workout []
}

const RenderWorkout: NextPage<Props> = ({workouts}) => {
=======
import { NextPage } from 'next'
import { Workout } from '@/types/workout'

interface Props {}

const RenderWorkout: NextPage<Props> = ({}) => {
>>>>>>> Stashed changes
  return( 
  <div className="">
    <form className=' py-12 flex justify-center'>
    <div >
    <h1>Face Pull</h1>
    </div>
    </form>
<<<<<<< Updated upstream
    
   {workouts.map((workout) =>())
    <ul key={workout._id}>
=======
    <form>
    <ul>
>>>>>>> Stashed changes
        <li className='flex justify-between' >
            <div className=' ml-6'> SET</div>
            <div>5 Reps</div>
            <div className=' mr-6'>0 Kg</div>
        </li>
    </ul>
<<<<<<< Updated upstream
  )
   ) 
   }
=======
    </form>
  
>>>>>>> Stashed changes
  
  </div>
  )
}

<<<<<<< Updated upstream
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
=======
export default RenderWorkout
>>>>>>> Stashed changes
