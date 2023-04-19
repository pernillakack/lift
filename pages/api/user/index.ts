import { NextApiRequest, NextApiResponse } from "next" 
import { connectToDatabase } from "@/utils/db"
import { Exercises } from "@/types/exercises"




export default async function handler(
req: NextApiRequest,
res: NextApiResponse <Exercises | Exercises[] | string>
){ 
    
    
    
    
 
    
    try {
const db = await connectToDatabase()


switch (req.method) { case "GET": {
// Get all excercises from the database

const exercises = await db.collection("excercises").find().toArray()

const convertedExercises: Exercises[] = exercises.map((userDoc) => { 
    
    return {
exercise: userDoc.exercise as string,
muscle: userDoc.muscle as string, 
 


} })
if (convertedExercises.length === 0) { console.log("Finns inga övningar") 
res.status(200).json("Tom")
} else { res.status(200).json(convertedExercises)
    console.log(exercises)
}
break
}
default: {
    
// Return a 405 Method Not Allowed error for all other HTTP methods res.setHeader("Allow", ["GET", "POST"]) res.status(405).end(`Method ${req.method} Not Allowed`)
res.setHeader("Allow", ["GET", "POST", ])
res.status(405).end(`Method ${req.method}Not allowed`)
break
} }
} catch (error) {
throw new Error("Something went wrong " + error)
} }
                                                                                                                                                                                                                                                                               
 