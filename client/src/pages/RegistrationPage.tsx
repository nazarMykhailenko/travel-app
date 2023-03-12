import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { registerUser } from '../redux/user/slice'

interface IRegistrationFormInput {
	fullName: string
	email: string
	password: string
}

export const RegistrationPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegistrationFormInput>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IRegistrationFormInput> = (data) => {
		dispatch(registerUser(data))
		navigate(`/`)
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-3xl font-bold mb-6'>Registration</h1>

				<div className='mb-4'>
					<label
						className='block text-gray-700 font-bold mb-2'
						htmlFor='firstName'
					>
						Full name:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.fullName ? 'border-red-500' : ''
						}`}
						type='text'
						{...register('fullName', {
							required: 'Name is require field!',
							minLength: {
								value: 3,
								message: 'Please put correct name',
							},
						})}
					/>
					{errors.fullName && (
						<span className='text-red-500'>{errors.fullName.message}</span>
					)}
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
						Email:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.email ? 'border-red-500' : ''
						}`}
						type='email'
						{...register('email', {
							required: 'Name is require field!',
						})}
					/>
					{errors.email && (
						<span className='text-red-500'>{errors.email.message}</span>
					)}
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 font-bold mb-2'
						htmlFor='password'
					>
						Password:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.password ? 'border-red-500' : ''
						}`}
						type='password'
						{...register('password', {
							required: 'Password is required filed',
							minLength: {
								value: 5,
								message: 'Password must be longer than 5 characters',
							},
						})}
					/>
					{errors.password && (
						<span className='text-red-500'>{errors.password.message}</span>
					)}
				</div>

				<div className='flex items-center justify-between'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Register
					</button>
				</div>
			</form>
		</div>
	)
}
