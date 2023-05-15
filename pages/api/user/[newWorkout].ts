import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { Workout } from "@/types/workout"
import { MyWorkoutModel } from "@/schemas/workoutSchema"


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
  console.log("NewWorkout")
  try {
    const saveWorkout: Workout = newWorkout as Workout


    console.log("saveWorkout innan de enskilda",saveWorkout)
    console.log(saveWorkout._id)
    console.log(saveWorkout.exercise)
    console.log(saveWorkout.musclegroup)
    console.log(saveWorkout.reps)
    console.log(saveWorkout.sets)
    console.log(saveWorkout.weight)
    console.log(saveWorkout.name)


    console.log("debugging now", saveWorkout)

    console.log("objektentries",Object.entries(saveWorkout).some(([key, value]) => key !== "_id"   && key !== "weight"   && !value))
    console.log("objektentries utan weight",Object.entries(saveWorkout).some(([key, value]) => key !== "_id"   && !value))
    if (
     

      Object.entries(saveWorkout).some(([key, value]) => key !== "_id"   &&  key !== "weigth"   && !value)
      // 
    ) {
      console.log("Inside if-statement")
      res.status(400).json("Invalid workout data")
        console.log("NewWorkout")
      return
    }

    console.log("preparing to save")

    await connectToDatabase()
    const workoutDoc = new MyWorkoutModel(saveWorkout)
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