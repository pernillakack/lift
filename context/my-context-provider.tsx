

import { Exercise } from '@/types/exercise'

import { NextPage } from 'next'
import { ReactNode, createContext, useDebugValue, useState } from 'react'

interface ExerciseProviderProps {
    children: ReactNode
}

export interface Workout {
    name: string
    exercises: Exercise[]
}

// Properties
interface ExerciseContextProps{
    id: number
    name: string
    exercise: string;
    musclegroup: string
    sets: number;
    reps: number;
    weight: number;
    setName: string
    setId: number
    selectedExercise: Workout[];
    setExercise: (exercise: string) => void
    setMusclegroup: (muscleGroup: string) => void
    setSets: (sets: number) => void
    setReps: (reps: number) => void
    setWeight: (weight: number) => void
    setSelectedExercise: (exercises: Workout[]) => void
    
}

const initialExerciseContext: ExerciseContextProps = {
    exercise: '',
    musclegroup: '',
    sets: 0,
    reps: 0,
    weight: 0,
    name: '',
    setName: '',
    id: 0,
    setId: 0,
    selectedExercise: [],
    setSelectedExercise: () => {},
    setExercise: () => { },
    setMusclegroup: () => { },
    setSets: () => { },
    setReps: () => { },
    setWeight: () => { },
    
}
export const MyContext = createContext<ExerciseContextProps>(initialExerciseContext)

const MyContextProvider: React.FC<ExerciseProviderProps> = ({children}) => {

    //Finalize
    const [exercise, setExercise] = useState<string>("")
    const [musclegroup, setMusclegroup] = useState<string>("")
    const [sets, setSets] = useState<number>(0)
    const [reps, setReps] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)
    const [id, setId]  = useState<number>(0)
    const [name, setName] = useState<string>("")
   
    
    //Connect
    const contextValue: ExerciseContextProps = {
        exercise,
        musclegroup,
        sets,
        reps,
        weight,
        name: '',
        setName: '',
        id: 0,
        selectedExercise: [],
        setSelectedExercise: (exercises: Workout[]) => setSelectedExercise(exercises),
        setId: 0,
        setExercise: (exercise: string) => setExercise(exercise),
        setMusclegroup: (musclegroup: string) => setMusclegroup(musclegroup),
        setSets: (sets: number) => setSets(sets),
        setReps: (reps: number) => setReps(reps),
        setWeight: (weight: number) => setWeight(weight),
        
    }

  return <MyContext.Provider value= {contextValue}
  children = {children}/>
}

export default MyContextProvider

function setSelectedExercise(exercises: Workout[]): void {
    throw new Error('Function not implemented.')
}
