


import { NextPage } from 'next'
import { ReactNode, createContext, useDebugValue, useState } from 'react'

interface UserProviderProps {
    children: ReactNode
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
    setExercise: (exercise: string) => void
    setMusclegroup: (muscleGroup: string) => void
    setSets: (sets: number) => void
    setReps: (reps: number) => void
    setWeight: (weight: number) => void
    setName: string
    setId: number
    
}

const initialExerciseContext: ExerciseContextProps = {
    exercise: '',
    musclegroup: '',
    sets: 0,
    reps: 0,
    weight: 0,
    setExercise: () => { },
    setMusclegroup: () => { },
    setSets: () => { },
    setReps: () => { },
    setWeight: () => { },
    name: '',
    setName: '',
    id: 0,
    setId: 0
}
export const MyContext = createContext<ExerciseContextProps>(initialExerciseContext)

const MyContextProvider: React.FC<UserProviderProps> = ({children}) => {

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
        setExercise: (exercise: string) => setExercise(exercise),
        setMusclegroup: (musclegroup: string) => setMusclegroup(musclegroup),
        setSets: (sets: number) => setSets(sets),
        setReps: (reps: number) => setReps(reps),
        setWeight: (weight: number) => setWeight(weight),
        name: '',
        setName: '',
        id: 0,
        setId: 0
    }

  return <MyContext.Provider value= {contextValue}
  children = {children}/>
}

export default MyContextProvider