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
        },
        name: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)
workoutSchema.methods.workoutName = function () {
    //detta är en metod, kan göra flera utifrån behov
    return `${this.name}`
}
workoutSchema.methods.timeForWorkout = function () {
    return `${this.exercise.first} ${this.musclegroup}`
}

export const WorkoutModel =
    mongoose.models.WorkoutModel ||
    mongoose.model<Workout>("WorkoutModel", workoutSchema,"workout")