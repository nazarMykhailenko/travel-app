import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useAppDispatch } from '../redux/store'
import { registerUser } from '../redux/user/slice'
import { IUser } from '../redux/user/types'

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
		dispatch(registerUser(data as IUser))
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
							required: 'Email is require field!',
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
					<Button otherStyles='bg-blue-500 hover:bg-blue-700'>Sign up</Button>
				</div>

				<div className='mt-4 text-center'>
					<p className='mb-1'>Already have an account?</p>
					<Link
						to='/log-in'
						className='text-blue-500 underline focus:outline-none'
					>
						Log in
					</Link>
				</div>
			</form>
		</div>
	)
}
