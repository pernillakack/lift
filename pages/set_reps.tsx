import { NextPage } from 'next'
import MyContextProvider from '@/context/my-context-provider'
import { MyContext } from '@/context/my-context-provider'
import { useContext } from 'react'
import ExerciseCard from '@/Components/excerciseCard'
import Link from 'next/link'
import MinaPass from './minaPass'




interface Props {}

const Set_reps: NextPage<Props> = ({}) => {

  const { exercise, muscleGroup, reps, sets } = useContext(MyContext);
  
  

  return (
  
     
  <div>
    
    <div className='h-screen flex justify-center'>
    <div id='card' className='flex justify-between px-4 py-4 h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>{`${exercise}`}</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>{`${muscleGroup}`}</div>

        </div>

        <div className=''>
        <form id='inputs' className='flex justify-center'>
        <input type="text" name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'/>
            <div className=' text-center not-italic '> x </div>
            <input type='text' name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'/>
        </form>
        <div className=' flex'>
            <div id='sets' className=' py-2 ml-2 mr-2 not-italic font-normal text-xs'>Sets</div>
            <div id='reps' className=' py-2 ml-4 mr-2 text-xs'>Reps</div> 
        </div>
        </div>
        </div>
    </div>
    <Link href ="/minaPass">
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        
      <button className=" text-[color:white] text-x+l bg-red-500 text-white font-bold py-2 px-8 rounded">
        Skapa pass {">"}
</button>
</div>
        <></> 
        </Link>
  </div>
  )
}

export default Set_reps