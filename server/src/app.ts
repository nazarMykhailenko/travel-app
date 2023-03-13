import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { loginValidation, registerValidation } from './validation.js'
import handleValidationErrors from './utils/handleValidationErrors.js'
import { login, register } from './controllers/UserController.js'
import { getAll } from './controllers/DestinationsController.js'

const url =
	'mongodb+srv://nazarprogramming:2136nazarm@cluster0.kmokheh.mongodb.net/?retryWrites=true&w=majority'

mongoose
	.connect(url, { retryWrites: true, w: 'majority' })
	.then(() => console.log('DB ok'))
	.catch((err) => console.log('DB error', err))

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
	res.send('OK')
})

app.post('/auth/login', loginValidation, handleValidationErrors, login)
app.post('/auth/register', registerValidation, handleValidationErrors, register)

app.get('/destinations', handleValidationErrors, getAll)

const server = app.listen(4444, () => {
	console.log('Server OK')
})
server.on('error', (e) => console.error('Error', e))
