import DittPass from '@/Components/dittPass'
import { NextPage } from 'next'
import Link from 'next/link'
import { TiPlus } from 'react-icons/ti'

interface Props {}

const Pass: NextPage<Props> = ({}) => {
  return  <div className="  [bg-gray-200]   bg-cover bg-center w-full    ">
<div className=' flex justify-items-center' >

<div id='card' className='flex px-4 py-4 absolute h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
<div id='info' className='flex flex-col'>Overhead dumbbell press
<div id='muskelgrupp' className=' w-24 h-4 not-italic font-normal text-xs leading-4'>Axlar</div>
</div>
<div id='container plus' className='flex my-4 ml-14 mr-2' >
<div><TiPlus className=' mb-8 w-[18px] h-[18px] top-[33px] left[297px]'/></div>
</div>
  
</div>

  
  
  <DittPass />

  </div>


</div>
    
}

export default Pass