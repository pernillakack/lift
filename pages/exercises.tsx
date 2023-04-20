import { NextPage } from 'next'
import ExerciseCard from '@/Components/excerciseCard'
import Set_repsPage from './set_repsPage'



interface Props {}

const Excercises: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className=" h-screen flex justify-center">
        
        <ExerciseCard />
        </div>
      <div>
 
<Set_repsPage/>
    
</div>
</div>
    
  
  )
}

export default Excercises