import { Workout } from "@/types/workout";
import { Schema } from "mongoose";
import mongoose from "mongoose";

const workoutSchema = new Schema<Workout>(
   {
        musclegroup: {
            type: String,
            required: true,
        },
        sets: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        exercise: {
            type: String,
            required: true
        },
        weight: {
            type: Number, 
        },
        name: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)

const myWorkoutSchema = new Schema(
  {
    workouts: [workoutSchema]
  },
  {versionKey: false}
);

export const MyWorkoutModel =
    mongoose.models.MyWorkoutModel ||
    mongoose.model("MyWorkoutModel", myWorkoutSchema, "myworkout");
