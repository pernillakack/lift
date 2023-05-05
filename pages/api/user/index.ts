import { NextApiRequest, NextApiResponse } from "next" 
import { connectToDatabase } from "@/utils/db"
import { Workout } from "@/types/workout"
import { WorkoutModel } from "@/schemas/workoutSchema"
import { useState } from "react"

export default async function handler(
req: NextApiRequest,
res: NextApiResponse <Workout | Workout[] | string | number>
){ 
    
    try {
const db = await connectToDatabase()

switch (req.method) { 
    case "GET": {
    // Get all workouts from the database
    const workout = await WorkoutModel.find().lean().exec()
    const convertedWorkout: Workout[] = workout.map((workoutDoc) => { 
    
    return {
    exercise: workoutDoc.exercise as string,
    musclegroup: workoutDoc.muscle as string, 
    sets: workoutDoc.sets as number,
    reps: workoutDoc.reps as number,
    weight: workoutDoc.weight as number,
    name: workoutDoc.name as string,
    _id: workoutDoc.id as string,
    } 
    })
    if (convertedWorkout.length === 0) { console.log("Finns inga övningar") 
    res.status(200).json("Tom")
    } else { res.status(200).json(convertedWorkout)
    console.log(workout)
    }
    break
    }
    case "POST":

    try {
        const { exercise, musclegroup, reps, sets, name } = req.body;
        const newWorkout = new WorkoutModel({ exercise, musclegroup, reps, sets, name });
        const saveWorkout = await newWorkout.save();
        res.status(201).json(saveWorkout);
      } catch (error) {
        throw new Error("Something went wrong " + error);
      }


    default: {
    
// Return a 405 Method Not Allowed error for all other HTTP methods res.setHeader("Allow", ["GET", "POST"]) res.status(405).end(`Method ${req.method} Not Allowed`)
res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"])
res.status(405).end(`Method ${req.method}Not allowed`)
break
} }
} catch (error) {
throw new Error("Something went wrong " + error)
} }
                                                                                                                                                                                                                                                                               
 