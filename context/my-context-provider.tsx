import { NextPage } from 'next'
import { ReactNode, createContext, useState } from 'react'

interface UserProviderProps {
    children: ReactNode
}

// Properties
interface ExerciseContextProps{
    exercise: string;
    muscleGroup: string
    sets: number;
    reps: number;
    weight: number;
    setExercise: (exercise: string) => void
    setMuscleGroup: (muscleGroup: string) => void
    setSets: (sets: number) => void
    setReps: (reps: number) => void
    setWeight: (weight: number) => void
    
}

const initialExerciseContext: ExerciseContextProps = {
    exercise: '',
    muscleGroup: '',
    sets: 0,
    reps: 0,
    weight: 0,
    setExercise: () => {},
    setMuscleGroup: () => {},
    setSets: () => {},
    setReps: () => {},
    setWeight: () => {}
}
export const MyContext = createContext<ExerciseContextProps>(initialExerciseContext)

const MyContextProvider: React.FC<UserProviderProps> = ({children}) => {

    //Finalize
    const [exercise, setExercise] = useState<string>("")
    const [muscleGroup, setMuscleGroup] = useState<string>("")
    const [sets, setSets] = useState<number>(0)
    const [reps, setReps] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)

    //Connect
    const contextValue: ExerciseContextProps = {
        exercise,
        muscleGroup,
        sets,
        reps,
        weight,
        setExercise: (exercise: string)=> setExercise(exercise),
        setMuscleGroup: (muscleGroup: string)=> setMuscleGroup(muscleGroup),
        setSets: (sets: number)=> setSets(sets),
        setReps: (reps: number)=> setReps(reps),
        setWeight: (weight: number)=> setWeight(weight)
    }

  return <MyContext.Provider value= {contextValue}
  children = {children}/>
}

export default MyContextProvider