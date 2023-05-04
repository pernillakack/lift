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
            
        },
        name: {
            type: String,
            required: true
        }
    },
    {versionKey: false}
)
workoutSchema.methods.workoutName = function () {
    //för att kalla på namnet till "minaPass"
    return `${this.name} ${this._id}`
}
workoutSchema.methods.timeForWorkout = function () {
    return `${this.exercise} ${this.musclegroup} ${this._id}`
}




export const WorkoutModel =
    mongoose.models.WorkoutModel ||
    mongoose.model<Workout>("WorkoutModel", workoutSchema,"myworkout")