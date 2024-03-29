import { body } from 'express-validator'

export const loginValidation = [
	body('email', 'Wrong email').isEmail(),
	body('password', 'Password must be longer than 5 characters').isLength({
		min: 5,
	}),
]

export const registerValidation = [
	body('email', 'Wrong email').isEmail(),
	body('password', 'Password must be longer than 5 characters').isLength({
		min: 5,
	}),
	body('fullName', 'Name is required field').isLength({ min: 3 }),
]

export const updateValidation = [
	body('email', 'Wrong email').isEmail(),
	body('fullName', 'Name is required field').isLength({ min: 3 }),
	body('Avatar', 'Avatar is required field').optional().isURL(),
]
