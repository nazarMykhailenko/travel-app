import { Request, Response } from 'express'

import { DestinationModel } from '../models/Destination.js'

export const getAll = async (req: Request, res: Response) => {
	try {
		// const destinations = await DestinationModel.find().exec()
		const destinations = await DestinationModel.find().limit(4).exec()
		res.json(destinations)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to get destinations',
		})
	}
}
