//import { MongoClient , Db, MongoClientOptions } from "mongodb"
import mongoose from "mongoose"

if (!process.env.MONGODB_URI) {
throw new Error("No MongoDB URI specified" )
}


const uri = process.env.MONGODB_URI


//let cachedClient :  | null = null
 
let cachedDb: typeof mongoose | null = null

{/*const options: MongoClientOptions = { 
    connectTimeoutMS: 5000, 
    socketTimeoutMS: 5000,
} */}

export async function connectToDatabase (): Promise<typeof mongoose> { 
    if (cachedDb) {
return cachedDb }

try {
const db = await mongoose.connect(uri, {
    socketTimeoutMS: 5000,
}) 


cachedDb = db
console.log("CONNECTED TO DATABASE")

return db
} catch (err) {
throw new Error(`Failed to connect to database:${err}`)
}
 }