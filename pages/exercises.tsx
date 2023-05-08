import { NextPage } from 'next';
import React, { useState } from 'react';
import ExerciseCard from '@/Components/excerciseCard';
import Set_repsPage from './set_repsPage';
import Button from '@/Components/button';
import TopNav from '@/Components/topNav';

interface Props {}

const Excercises: NextPage<Props> = ({}) => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const handleSelectExercise = (exercise: string, muscleGroup: string) => {
    const newExercise = `${exercise} ${muscleGroup}`;
    setSelectedExercises((prevState) => [...prevState, newExercise]);
  };

  const handleChange = () => {
    console.log(selectedExercises);
  };

  return (
    <div className="uxBackground h-screen flex flex-col">
      <TopNav activeButton={'exercises'}></TopNav>
      <div className="flex-grow mt-20 overflow-auto">
        <ExerciseCard onSelectExercise={handleSelectExercise} />
      </div>

      <div
        className="uxBackground justify-center w-screen bottom-0 h-65 flex space-x-10 mx-0"
        style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
      >
        <Set_repsPage>
          <Button text={'Gå vidare >'} onClick={handleChange} />
        </Set_repsPage>
      </div>
    </div>
  );
};

export default Excercises;

