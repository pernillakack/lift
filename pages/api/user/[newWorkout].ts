import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { Workout } from "@/types/workout"


export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse<Workout | string | number>
){
const newWorkout = req.body // FOR BODY // const { newExercise } = req.query // FOR QUERY

 if (!newWorkout) {
   res.status(400).json("New workout is not defined")
   return
 }
}                                                                                             