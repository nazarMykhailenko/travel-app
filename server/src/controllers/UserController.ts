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