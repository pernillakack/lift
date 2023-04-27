import { NextApiRequest, NextApiResponse } from "next" 
import { connectToDatabase } from "@/utils/db"
import { Workout } from "@/types/workout"

export default async function handler(
req: NextApiRequest,
res: NextApiResponse <Workout | Workout[] | string | number>
){ 
    
    try {
const db = await connectToDatabase()

switch (req.method) { 
    case "GET": {
    // Get all workouts from the database
    const workout = await db.collection("myworkout").find().toArray()
    const convertedWorkout: Workout[] = workout.map((userDoc) => { 
    
    return {
    exercise: userDoc.exercise as string,
    muscle: userDoc.muscle as string, 
    sets: userDoc.sets as number,
    reps: userDoc.reps as number
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
    //create posts with the workout

    default: {
    
// Return a 405 Method Not Allowed error for all other HTTP methods res.setHeader("Allow", ["GET", "POST"]) res.status(405).end(`Method ${req.method} Not Allowed`)
res.setHeader("Allow", ["GET", "POST", ])
res.status(405).end(`Method ${req.method}Not allowed`)
break
} }
} catch (error) {
throw new Error("Something went wrong " + error)
} }
                                                                                                                                                                                                                                                                               
 