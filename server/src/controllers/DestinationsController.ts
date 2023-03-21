import { Request, Response } from 'express'

import { IDestination } from '../models/types.js'
import { DestinationModel } from '../models/Destination.js'

export const getAll = async (req: Request, res: Response) => {
	try {
		const destinations = await DestinationModel.find().exec()
		res.json(destinations)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to get destinations',
		})
	}
}

export const getOne = async (req: Request, res: Response) => {
	try {
		const destinationId = req.params.id

		const destination: IDestination | null = await DestinationModel.findOne({
			_id: destinationId,
		})

		if (!destination) {
			return res
				.status(404)
				.json({ message: `Destination with id ${destinationId} not found.` })
		}

		return res.status(200).json(destination)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to get this destination',
		})
	}
}

export const toggleSavedStatus = async (req: Request, res: Response) => {
	try {
		const destinationId = req.params.id
		const currentSavedStatus = req.body.currentSavedStatus

		console.log(currentSavedStatus + ' saved status')

		const destination = await DestinationModel.findByIdAndUpdate(
			destinationId,
			{ isSaved: !currentSavedStatus },
			{ new: true }
		)

		res.status(200).json(destination)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to update saved status',
		})
	}
}
