import { NextPage } from 'next'
import Shoulders from '@/Components/shoulders'
import Legs from '@/Components/legs'


interface Props {}

const Index: NextPage<Props> = ({}) => {
  return <div  className=" bg-cover bg-center w-full h-full "
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')", 
  }}>
    <form>
    <Shoulders />
  <Legs />
  </form>
  </div>;
}
//  <><Shoulders /></>


export default Index