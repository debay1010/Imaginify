import { Schema, model, models } from "mongoose";

interface IImage extends Document {
	title: string;
	transformationType: string;
	publicId: string;
	secureUrl: URL;
	width?: number; // Optional property
	height?: number; // Optional property
	config?: object; // Optional property
	transformationUrl?: URL; // Optional property
	aspectRatio?: string; // Optional property
	color?: string; // Optional property
	prompt?: string; // Optional property
	author: {
		_id: string;
		firstname: string;
		lastname: string;
	}; // Assuming ref "User" translates to string ID
	createdAt: Date;
	updatedAt: Date;
}

const ImageSchema = new Schema({
	title: { type: String, required: true },
	transformationType: { type: String, required: true },
	publicId: { type: String, required: true },
	secureUrl: { type: URL, required: true },
	width: { type: Number },
	height: { type: Number },
	config: { type: Object },
	transformationUrl: { type: URL },
	aspectRatio: { type: String },
	color: { type: String },
	prompt: { type: String },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
