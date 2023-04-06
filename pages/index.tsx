import { NextPage } from 'next'
import Shoulders from '@/Components/shoulders'
import Legs from '@/Components/legs'


interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className=' h-screen flex justify-center'>
  <div className=" bg-cover w-full flex justify-center"
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')",
   maxWidth:700}}>
    <div className=' flex items-center justify-center'><Shoulders /></div>
    </div>
</div>
  )
}



export default Index