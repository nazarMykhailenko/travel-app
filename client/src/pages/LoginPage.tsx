import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useAppDispatch } from '../redux/store'
import { logInUser } from '../redux/user/slice'

interface ILogInFormInput {
	email: string
	password: string
}

export const LogInPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogInFormInput>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<ILogInFormInput> = (data) => {
		dispatch(logInUser(data))
		navigate(`/`)
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-3xl font-bold mb-6'>Log in</h1>
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
					<Button otherStyles='bg-blue-500 hover:bg-blue-700'>Log in</Button>
				</div>

				<div className='mt-4 text-center'>
					<p className='mb-1'>Don`t have an account?</p>
					<Link
						className='text-blue-500 underline focus:outline-none'
						to='/sign-up'
					>
						Sign up
					</Link>
				</div>
			</form>
		</div>
	)
}
