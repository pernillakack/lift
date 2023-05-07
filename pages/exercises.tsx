import { NextPage } from 'next'
import ExerciseCard from '@/Components/excerciseCard'
import Set_repsPage from './set_repsPage'
import Button from '@/Components/button'
import TopNav from '@/Components/topNav'

interface Props {}

const handleChange = () => {
  console.log("")
}

const Excercises: NextPage<Props> = ({}) => {
  return (
    <div className="uxBackground h-screen flex flex-col" >
      <TopNav activeButton={'exercises'}></TopNav>
      <div className='  flex-grow mt-20 overflow-auto'>
        
         <ExerciseCard />
      </div >
      
      <div className="uxBackground justify-center w-screen bottom-0 h-65 flex space-x-10 mx-0" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
  <Set_repsPage>
    <Button text={"Gå vidare >"} onClick={handleChange} />
  </Set_repsPage>
</div>


      
     
    </div>
  )
}

export default Excercises
