import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const userSchema = new Schema ({
    name: String,
    age: Number,
    email: { type: String, requered: true, unique: true },
});

export const Users =  models.Users || model("Users", userSchema);