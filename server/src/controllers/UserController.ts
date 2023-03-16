import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { IUser } from '../models/types.js'

import { UserModel } from '../models/User.js'

export const register = async (req: Request, res: Response) => {
	try {
		console.log(`here`)
		const password: string = req.body.password
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash(password, salt)

		const doc = new UserModel<IUser>({
			email: req.body.email,
			fullName: req.body.fullName,
			passwordHash: hash,
		})

		const user = await doc.save()

		const token = jwt.sign(
			{
				_id: user._id,
			},
			'secret123',
			{
				expiresIn: '30d',
			}
		)

		const { passwordHash, ...userData } = user.toObject()

		res.json({
			...userData,
			token,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to register',
		})
	}
}

export const login = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findOne({ email: req.body.email })

		if (!user) {
			return res.status(404).json({
				message: 'User is not found',
			})
		}

		const isValidPass = await bcrypt.compare(
			req.body.password,
			user.toObject().passwordHash
		)

		if (!isValidPass) {
			return res.status(400).json({
				message: 'Wrong login or password',
			})
		}

		const token = jwt.sign(
			{
				_id: user._id,
			},
			'secret123',
			{
				expiresIn: '30d',
			}
		)

		const { passwordHash, ...userData } = user.toObject()

		res.json({
			...userData,
			token,
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Failed to login',
		})
	}
}

export const update = async (req: Request, res: Response) => {
	const userId = req.params.id
	const userData = req.body

	try {
		const user = await UserModel.findByIdAndUpdate(userId, userData, {
			new: true,
		})

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		res.json(user)
	} catch (error) {
		res.status(500).json({ message: 'Server error', error })
	}
}
