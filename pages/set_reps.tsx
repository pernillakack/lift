import { NextPage } from 'next'

interface Props {}

const Set_reps: NextPage<Props> = ({}) => {
  return <div>
    <div id='card' className='flex justify-between px-4 py-4 absolute h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>Bänkpress</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>Pectoralis Major</div>

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
}

export default Set_reps