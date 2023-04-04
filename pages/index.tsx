import { NextPage } from 'next'
import Shoulders from '@/Components/shoulders'


interface Props {}

const Index: NextPage<Props> = ({}) => {
  return <div  className=" bg-cover bg-center w-full h-full "
  style={{
    backgroundImage:
      "url('https://api.media.atlassian.com/file/9ccfb355-551d-4fb1-9144-9017ed1c1883/binary?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhOTQwNjQ4NC0wYjQyLTRlNGMtYTZhZS00YzMxODA5ZWU1NDUiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjljY2ZiMzU1LTU1MWQtNGZiMS05MTQ0LTkwMTdlZDFjMTg4MyI6WyJyZWFkIl19LCJleHAiOjE2ODA2NDU5NTksIm5iZiI6MTY4MDU2MzAzOX0.hEjzj24w_6JUMYIxzFUE59GfZAWvffOsFk6WWPi4tzA&client=a9406484-0b42-4e4c-a6ae-4c31809ee545&name=Startsida.png')",
  }}><Shoulders /></div>;
}
//  <><Shoulders /></>


export default Index