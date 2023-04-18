import { NextPage } from 'next'
import ExerciseCard from '@/Components/excerciseCard'


interface Props {}

const Excercises: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className=" h-screen flex justify-center">
        
        <ExerciseCard />
        </div>
      
    </div>
  )
}

export default Excercises