import { NextPage, GetServerSideProps } from 'next'
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import { WorkoutModel } from '@/schemas/workoutSchema'




type Props = {
    workout: Workout []
}

const MinaPass: NextPage<Props> = ({workout}) => {
  return (
    <div className=' h-screen flex justify-center'>
  <div className=" bg-cover w-full flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')",
   maxWidth:700}}>
    <div className=' flex justify-center'>Mina Pass</div>
    <ul>
      {
        workout.map((workout) => (
          <li key={workout._id}>
            {`${workout.name}`} 

          </li>
        )
        ) 
      }
    </ul>
    </div>
    
</div>

  
  )
}

export default MinaPass

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
