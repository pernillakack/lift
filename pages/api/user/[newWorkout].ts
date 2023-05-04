import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { Workout } from "@/types/workout"
import { WorkoutModel } from "@/schemas/workoutSchema"


export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse<Workout | string | number>
){
const newWorkout = req.body // FOR BODY // const { newExercise } = req.query // FOR QUERY

console.log(newWorkout);

 if (!newWorkout) {
   res.status(400).json("New workout is not defined")
   return
 }

 if (req.method === "POST") {
  try {
    const saveWorkout: Workout = newWorkout as Workout

    if (
      Object.entries(saveWorkout).some(([key, value]) => key !== "_id" && !value)
    ) {
      res.status(400).json("Invalid workout data")
      return
    }

    await connectToDatabase()
    const workoutDoc = new WorkoutModel(saveWorkout)
    await workoutDoc.save()

    res.status(200).json(saveWorkout)
}   catch (error) {
    console.error(error)
    res.status(500).json("Internal server error")
}
 }else {
  res.status(405).send(`Method ${req.method} Not Allowed`)
 }
}                                                                                             