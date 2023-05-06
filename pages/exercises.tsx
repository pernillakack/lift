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
      <div className=' flex-grow mt-20 overflow-auto'>
        
         <ExerciseCard />
      </div>
      <div className="uxBackground fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <Set_repsPage>
          <Button text={"Gå vidare >"} onClick={handleChange} />
        </Set_repsPage>
      </div>
    </div>
  )
}

export default Excercises
