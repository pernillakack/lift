import React, { useContext,  useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import MyContextProvider, { MyContext } from '@/context/my-context-provider';
import { chosenExercise } from '@/functions/chosenEx';
import TopNav from './topNav';
import { TiMinus } from 'react-icons/ti';
import { useEffect } from 'react';

interface Props {
  onSelectExercise: (exercise: string, muscleGroup: string, nr: number) => void;
}



const ExerciseCard: React.FC<Props> = ({ onSelectExercise }) => {
  
  const [selectedExercise, setSelectedExercise] = useState<{ nr: number; exercise: string; muscleGroup: string}[]>([]);

  useEffect(() => {
    console.log("Använder useEffect, selectedExercise",selectedExercise)
  }, [selectedExercise])

  const exerciseContext = useContext(MyContext);
  const [isColored, setIsColored] = useState<{ [key: string]: boolean }>({});

  const exercises = chosenExercise();

  const handleExercise = (element: { nr: number; exercise: string; muscleGroup: string }) => {
    // Spara det valda objektet i en Array
    const newExerciseArray = []
    const newExercise = { nr: element.nr, exercise: element.exercise, muscleGroup: element.muscleGroup };
    newExerciseArray.push(newExercise)
   
    console.log("Inne i handleExercise")
    //Kontrollerar om det nya objektet redan finns
      const existingExercise = selectedExercise.find(
      (exercise) =>
        exercise.exercise === newExercise.exercise && exercise.muscleGroup === newExercise.muscleGroup && exercise.nr === newExercise.nr
    ) //om den finns så tas den bort?
    if(existingExercise) {
      setSelectedExercise((prevState) =>
      prevState.filter(
        (exercise) => 
          exercise.exercise !== existingExercise.exercise || exercise.muscleGroup !== existingExercise.muscleGroup || exercise.nr !== existingExercise.nr
      ))
        //finns den inte läggs den till
    } else {
      setSelectedExercise((prevState) => [...prevState, newExercise])
   //   console.log("Inne i else, använder selectedExercise",selectedExercise)
     // console.log('Vår array: ', newExerciseArray)

      
    }
    
   
    //färga det valda kortets bakgrund grön
    setIsColored((prevState) => ({
      ...prevState,
      [element.nr]: !prevState[element.nr],
    }));

    // Sätt övningens värden i ExerciseContext
    exerciseContext.setExercise(element.exercise);
    exerciseContext.setMusclegroup(element.muscleGroup);
    exerciseContext.setSelectedExercise([])
  };

  

  const [searchQuery, setSearchQuery] = useState<string>('');

  const listExercises = exercises
    .filter((element) => {
      const searchRegex = new RegExp(searchQuery, 'i');
      return searchRegex.test(element.exercise) || searchRegex.test(element.muscleGroup);
    })
    .map((element) => (
      <div className=" container  uxBackground m-4">
        <li key={`${element.nr}`}>
          <div
            onClick={() => handleExercise(element)}
            id="card"
            className={`flex justify-between px-4 py-4 h-20 ${
              isColored[element.nr] ? ' bg-ourcolor-green' : ' bg-ourcolor-white'
            } uxShadow rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px]`}
          >
            <div id="info" className="block">
              {`${element.exercise}`}
              <div
                id="muskelgrupp"
                className="py-2 w-24 h-4 not-italic font-normal text-xs leading-4"
              >
                {`${element.muscleGroup}`}
              </div>
            </div>
            <div id="container plus" className="flex my-4 ml-1 mr-2">
              {isColored[element.nr] ? (
                <div>
                <TiMinus className=" mb-8 w-[18px] h-[18px] top-[33px] left[297px]" />
              </div>
              ) : (
                <div>
                <TiPlus className=" mb-8 w-[18px] h-[18px] top-[33px] left[297px]" />
              </div>
              )}
             
            </div>
          </div>
        </li>
      </div>
    ));

  return (
    <>
      <div className='flex'>
        <div className=' h-65  uxBackground fixed w-screen   justify-center 
        flex  mx-0'
        > 
        <div id="searchBar" className=' flex fixed  py-2 px-6 border border-gray-300 rounded-3xl m-8  '>
          
          <input
          
            type="text"
            placeholder="Sök..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>tets
        </div>
        <div className="exercise-list-container" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}></div>
        <ul className=' mt-20'>{listExercises}</ul>
      </div>
    </>
  );
};

export default ExerciseCard;


