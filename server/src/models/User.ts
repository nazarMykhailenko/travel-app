import mongoose, { Schema, Model } from 'mongoose'
import { IUser } from './types.js'

const UserSchema = new Schema<IUser>(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		passwordHash: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

export const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema)
