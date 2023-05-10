
import { NextPage, GetServerSideProps } from 'next'
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import { WorkoutModel } from '@/schemas/workoutSchema'
import Button from '@/Components/button'
import Link from 'next/link'


type Props = {
    workouts: Workout []
}

const handleClick = ()=> {

  
}

const MinaPass: NextPage<Props> = ({workouts}) => {
  return (
    <div className=' h-screen flex justify-center'>
  <div className=" bg-cover w-full flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')",
   maxWidth:700}}>
  <div className='flex flex-col h-screen my-auto mt-60 ml-9'>
  <h1 className='text-lg'>Mina Pass</h1>
  <div className="">
    {workouts.map((workout) => (
      <ul key={workout._id}  > 
        <li className='flex justify-between py-2'>  
      {/*   <RenderWorkoutPage workout={`${workout.name} ${workout.sets} ${workout.reps} ${workout.weight} ${workout.exercise} ${workout.musclegroup}`} /> */}
      <Link href={`/renderWorkout?name=${workout.name}&sets=${workout.sets}&reps=${workout.reps}&exercise=${workout.exercise}`}> 
        <Button text={[workout.name, " >"]}  onClick={handleClick}></Button>
        </Link> 
        </li>
      </ul>
    ))}
  </div>
 
</div>

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

/*

import { NextPage } from 'next'
import { GetStaticProps } from "next";
import { MongoClient } from "mongodb";

import { InferGetStaticPropsType } from "next";
import { ObjectId } from "mongodb";
import Button from '@/Components/button';
import { Workout } from '@/types/workout';
    
export const getStaticProps: GetStaticProps = async (context) => {
        const mongoClient = new MongoClient(
            'mongodb+srv://simonnilsson90:Lattelotta@cluster0.ltg2z5p.mongodb.net/liftdatabase'
            
            );

            const data = await mongoClient
            .db()
            .collection('myworkout')
            .find()
            .toArray();

            console.log( '!!!',data);

            return {
                props: {
                    workouts: JSON.parse(JSON.stringify(data)),
                },
                revalidate: 60
        
            };
        };

        const Workout: NextPage = ({
            workouts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
return (
<>
<div className=' h-screen flex justify-center'>
    <div className=" bg-cover w-full flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')",
   maxWidth:700}}> 
    <div className=''>
     <h1>Mina Pass:</h1>
      {workouts.map((workout: Workout) => {
     return (
      <ul key={workout._id}>
        <li className='flex justify-between py-2' >  
            <Button text={workout.name} onClick={function (): void {
             throw new Error('Function not implemented.');
           } }></Button>
        </li>
      </ul>
    );
   })}
   </div>
</div>
 </div>

</>

);
};

export default Workout

 */
