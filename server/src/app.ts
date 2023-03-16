import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import multer, { StorageEngine } from 'multer'
import mongoose from 'mongoose'

import {
	loginValidation,
	registerValidation,
	updateValidation,
} from './validation.js'
import handleValidationErrors from './utils/handleValidationErrors.js'
import { login, register, update } from './controllers/UserController.js'
import { getAll, getOne } from './controllers/DestinationsController.js'

const url =
	'mongodb+srv://nazarprogramming:2136nazarm@cluster0.kmokheh.mongodb.net/?retryWrites=true&w=majority'

mongoose
	.connect(url, { retryWrites: true, w: 'majority' })
	.then(() => console.log('DB ok'))
	.catch((err) => console.log('DB error', err))

const storage: StorageEngine = multer.diskStorage({
	destination: (_, __, cb) => {
		if (!fs.existsSync('uploads')) {
			fs.mkdirSync('uploads')
		}
		cb(null, 'uploads')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage })

const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.get('/', (_, res) => {
	res.send('OK')
})

app.post('/auth/login', loginValidation, handleValidationErrors, login)
app.post('/auth/register', registerValidation, handleValidationErrors, register)
app.patch('/auth/:id', updateValidation, handleValidationErrors, update)

app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
	if (!req.file) {
		return res.status(400).json({ message: 'No file uploaded' })
	}

	res.json({
		url: `/uploads/${req.file.originalname}`,
	})
})

app.get('/destinations', getAll)
app.get('/destinations/:id', getOne)

const server = app.listen(4444, () => {
	console.log('Server OK')
})
server.on('error', (e) => console.error('Error', e))
