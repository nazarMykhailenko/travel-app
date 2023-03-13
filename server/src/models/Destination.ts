import mongoose, { Schema, Model } from 'mongoose'
import { IDestination, ILocation, IInfo, ITickets } from './types.js'

const LocationSchema = new Schema<ILocation>({
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
})

const InfoSchema = new Schema<IInfo>({
	desc: {
		type: String,
		required: true,
	},
	sumUp: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
})

const TicketsSchema = new Schema<ITickets>({
	time: {
		type: Date,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
})

const DestinationSchema = new Schema<IDestination>(
	{
		location: {
			type: LocationSchema,
			required: true,
		},
		info: {
			type: InfoSchema,
			required: true,
		},
		tickets: {
			type: TicketsSchema,
			required: true,
		},
		hotelsAvailable: {
			type: [{ name: String, img: String, city: String }],
			required: true,
		},
		rating: String,
		isSaved: Boolean,
	},
	{
		timestamps: true,
	}
)

export const DestinationModel: Model<IDestination> =
	mongoose.model<IDestination>('Destination', DestinationSchema)
