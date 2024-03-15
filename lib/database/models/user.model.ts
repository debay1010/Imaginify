import { Schema, models, model } from "mongoose";
import { unique } from "next/dist/build/utils";

interface IUser extends Document {
	clerkId: string; // Unique identifier, required
	email: string; // Unique email address, required
	username: string; // Unique username, required
	firstname?: string; // Optional property
	lastname?: string; // Optional property
	photo: string; // Profile picture URL, required
	planId: number; // Defaults to 1 (can be overridden)
	creditBalance: number; // Defaults to 10 (can be overridden)
}

const UserSchema = new Schema({
	clerkId: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	firstName: { type: String },
	lastName: { type: String },
	photo: { type: String, required: true },
	planId: { type: Number, default: 1 },
	creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
