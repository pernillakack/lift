import { Workout } from "@/types/workout";
import { Schema } from "mongoose";
import mongoose from "mongoose";

const workoutSchema = new Schema<Workout>(
    {
        _id: {
            type: String
        },
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
            required: true
        }
    },
    {versionKey: false}
)
workoutSchema.methods.fullName = function () {
    //vad betyder nedan?
    return `${this.name.first} ${this.name.last}`
}

export const WorkoutModel =
    mongoose.models.WorkoutModel ||
    mongoose.model<Workout>("WorkoutModel", workoutSchema,"workout")