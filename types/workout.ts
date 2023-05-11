import mongoose from "mongoose"

export type Workout = {
 _id?: string    
musclegroup: string
exercise: string
sets: number
reps: number
weight?: number
name: string
nr : number
 
   }
                    