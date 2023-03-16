import axios from 'axios'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchUpdatedUser, setAvatar } from '../../redux/user/slice'
import { EditItem } from './EditItem'
import { ISettingsPageInput } from './types'

export const SettingsPage: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISettingsPageInput>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	const { user } = useAppSelector((state) => state.user)
	const [file, setFile] = React.useState('')

	const onSubmit: SubmitHandler<ISettingsPageInput> = () => {
		user && dispatch(fetchUpdatedUser(user))
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData()
			const file = e.target.files && e.target.files[0]
			if (file) {
				formData.append('image', file)
			}
			const { data } = await axios.post(
				'http://localhost:4444/upload',
				formData
			)
			dispatch(setAvatar(data.url))
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-3xl font-bold mb-6'>Settings</h1>

				<div className='mb-8'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='image'
					>
						Upload Profile Picture
					</label>
					<input
						{...register('image')}
						onChange={handleFileChange}
						className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='file'
					/>
					{errors.image && (
						<p className='text-red-500 text-xs italic'>
							{errors.image.message}
						</p>
					)}
				</div>

				{user ? (
					<EditItem
						register={register}
						parameter='fullName'
						value={user.fullName}
					/>
				) : (
					<div>Loading...</div>
				)}

				{user ? (
					<EditItem register={register} parameter='email' value={user.email} />
				) : (
					<div>Loading...</div>
				)}

				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					type='submit'
				>
					Save Changes
				</button>
			</form>
		</div>
	)
}
