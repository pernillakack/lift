import { NextPage } from 'next';
import React, { useState } from 'react';
import ExerciseCard from '@/Components/excerciseCard';
import Button from '@/Components/button';
import TopNav from '@/Components/topNav';
import Link from 'next/link';

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
      
      <div className="flex-grow mt-20 py-8 overflow-auto">
        <ExerciseCard onSelectExercise={handleSelectExercise} />
      </div>

    
    </div>
  );
};


export default Excercises;

