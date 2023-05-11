import { connectToDatabase } from "@/utils/db"
import type { NextApiRequest, NextApiResponse } from "next"
import { Exercises } from "@/types/exercises"


export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse<Exercises | string>
){
const newExercise = req.body // FOR BODY // const { newExercise } = req.query // FOR QUERY

 if (!newExercise) {
   res.status(400).json("New exercise is not defined")
   return
 }
}                                                                                             