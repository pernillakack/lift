import Button from '@/Components/button';
import TopNav from '@/Components/topNav';
import { chosenExercise } from '@/functions/chosenEx';
import { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import style from 'styled-jsx/style';

interface Props {}

const NewExercises: NextPage<Props> = ({}) => {
    const [selectedExercise, setSelectedExercise] = useState<string[]>([]);

    const [isColored, setIsColored] = useState<{[key: string]: boolean}>({});
   
    const handleExercise = (element: { nr: number; exercise: string; muscleGroup: string; }) => {
        // Spara det valda objektet i en Array
        const newExercise = `${element.exercise} ${element.muscleGroup}`;
      
        setSelectedExercise(prevState => [...prevState, newExercise]);
        //färga det valda kortets bakgrund grön
       
        setIsColored((prevState) => ({
          ...prevState,
        [element.nr]: !prevState[element.nr]}))
        // Sätt övningens värden i ExerciseContext
       // exerciseContext.setExercise(element.exercise);
        //exerciseContext.setMusclegroup(element.muscleGroup);
      }
    
      const exercises = chosenExercise()
      const handleClick = () => {
        console.log("Klickat gå vidare")
      }
    
    const handleChange =()=>{}
    
    const [searchQuery, setSearchQuery] = useState<string>('');


      return (
      <div>
        <div className=" h-screen uxBackground flex justify-center">
            <TopNav activeButton={'exercises'}></TopNav>
           
           
            <div className=' h-65    fixed w-screen   justify-center 
        flex  mx-0'
        > 
        <div id="searchBar" className=' flex h-6 items-center  fixed  py-4 px-6 border border-gray-300 rounded-3xl m-8  '>
        <img src="https://lift94.files.wordpress.com/2023/05/keylift.png?w=17" className="w-5 h-5 object-cover mr-0" alt="nyckel" />
          <input
          
            type="text"
            placeholder="Sök..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="py-2 px-3 bg-transparent rounded-full focus:outline-none w-full"
          />
        </div>
        </div>
            <div>hej</div>
            <ul>
            {exercises.map((element) => {
                return(
            <div className=' m-4'>
            <li key={`${element.nr}`}>
            <div onClick={() => handleExercise(element)} id='card' 
            className={`flex justify-between px-4 py-4 h-20 
            ${isColored[element.nr] ?" bg-ourcolor-green" : " bg-ourcolor-white"} 
            uxShadow rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px]`}>
              <div id='info' className='block'>{`${element.exercise}`}
                <div id='muskelgrupp' className=' py-2 w-24 h-4 not-italic font-normal text-xs leading-4'>{`${element.muscleGroup}`}</div>
              </div>
              <div id='container plus' className='flex my-4 ml-1 mr-2'>
                {isColored[element.nr] ? (
              <div>
             <TiMinus className=" mb-8 w-[18px] h-[18px] top-[33px] left[297px]" />
              </div>
                ):(
                  <div><TiPlus className=' mb-8 w-[18px] h-[18px] top-[33px] left[297px]' /></div>
                )}
               
              </div>
            </div>
            </li>
            </div>
                )
            })}
    
            </ul>
            <div style={{
                position: 'fixed',
                bottom: '32px'
            }}>
                <Link href={"/set_reps"}>
                    <Button text={'Gå vidare >'} onClick={handleChange}></Button>
                </Link>
            </div>
        </div>
        </div>    
        )
    }

export default NewExercises