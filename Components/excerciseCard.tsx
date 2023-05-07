import React, { useContext, useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import MyContextProvider, { MyContext } from '@/context/my-context-provider';
import { chosenExercise } from '@/functions/chosenEx';
import TopNav from './topNav';

const ExerciseCard = () => {
  const [selectedExercise, setSelectedExercise] = useState<string[]>([]);
  const exerciseContext = useContext(MyContext);
  const [isColored, setIsColored] = useState<{ [key: string]: boolean }>({});

  const handleExercise = (element: { id: number; exercise: string; muscleGroup: string }) => {
    // Spara det valda objektet i en Array
    const newExercise = `${element.exercise} ${element.muscleGroup}`;
    setSelectedExercise((prevState) => [...prevState, newExercise]);
    //färga det valda kortets bakgrund grön
    setIsColored((prevState) => ({
      ...prevState,
      [element.id]: !prevState[element.id],
    }));

    // Sätt övningens värden i ExerciseContext
    exerciseContext.setExercise(element.exercise);
    exerciseContext.setMusclegroup(element.muscleGroup);
  };

  const exercises = chosenExercise();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const listExercises = exercises
    .filter((element) => {
      const searchRegex = new RegExp(searchQuery, 'i');
      return searchRegex.test(element.exercise) || searchRegex.test(element.muscleGroup);
    })
    .map((element) => (
      <div className=" uxBackground m-4">
        <li key={`${element.id}`}>
          <div
            onClick={() => handleExercise(element)}
            id="card"
            className={`flex justify-between px-4 py-4 h-20 ${
              isColored[element.id] ? ' bg-ourcolor-green' : ' bg-ourcolor-white'
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
              <div>
                <TiPlus className=" mb-8 w-[18px] h-[18px] top-[33px] left[297px]" />
              </div>
            </div>
          </div>
        </li>
      </div>
    ));

  return (
    <>
      <div>
        <div id="searchBar" className='py-2 px-4 border border-gray-300 rounded-md m-8 '>
          <input
          
            type="text"
            placeholder="Sök..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <ul>{listExercises}</ul>
      </div>
    </>
  );
};

export default ExerciseCard;
