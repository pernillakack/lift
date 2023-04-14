import { NextPage } from 'next'

interface Props {}

const Set_reps: NextPage<Props> = ({}) => {
  return <div>
    <div id='card' className='flex justify-between px-4 py-4 absolute h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>Bänkpress</div>
            <div id='muskelgrupp' className='text-xs'>Pectoralis Major</div>

        </div>

        <div className='flex flex-row'>
        <form>
            <div id='sets' className=''> sets
            <input type="text" name='message'  className='w-8 rounded-xl border-solid border-2 border-black'/> reps <input type='text' name='message' className='w-8 rounded-xl border-solid border-2 border-black'/></div>
        </form>
        </div>
       
    </div>
  </div>
}

export default Set_reps