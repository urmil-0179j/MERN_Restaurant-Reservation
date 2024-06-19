import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.reservationSchema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"First name must contain atleast 3 characters!"],
        maxLength: [30,"First name cannot exceed 30 characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"Last name must contain atleast 3 characters!"],
        maxLength: [30,"Last name cannot exceed 30 characters!"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10,"Phone number must contain only 10 digits!"],
        maxLength: [10,"Phone number must contain only 10 digits!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email address!"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
})

export const Reservation = mongoose.model("Reservation",reservationSchema)