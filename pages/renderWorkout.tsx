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
  workouts: Workout[]
}

const RenderWorkout: NextPage<Props> = ({}) => {
  const router = useRouter()
  const { name, sets, reps, exercise } = router.query

  return (
    <div className='uxBackground h-screen block'>
       <form className='py-8 flex justify-center'>
        <div className="flex items-center">
          <div className="ml-4  link-arrow" onClick={() => router.push("/minaPass")}>
            &lt;
          </div>
          <h1 className="uxColor font-bold text-xl">{`${name}`}</h1>
        </div>
      </form>

      <ul className=''>
        <form className=' ml-4 uxShadow rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px]'>
          <div className='py-6 flex justify-center'>
            <h2 className=" uxColor font-bold text-xl" >{`${exercise}`}</h2>
          </div>
          {Array.from({ length: sets }).map((_, i) => (
            <li className='flex justify-between' key={i}>
              <div className='ml-6 py-2 mt-2'>SET {i + 1}</div>
              <div className='py-2'>
                <input type="text" placeholder={`${reps}`} className='mb-1 ml-2 mr-2 w-8  text-center' />
                <div>Reps</div>
              </div>
              <div className='py-2 mr-4'>
                <input type="text" placeholder='0' className='mb-1 ml-2 mr-2 w-8  text-center' />
                <div className=' text-right pr-4'>Kg</div>
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
  )
}

export default RenderWorkout
