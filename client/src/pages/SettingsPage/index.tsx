import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchUpdatedUser } from '../../redux/user/slice'
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

	const onSubmit: SubmitHandler<ISettingsPageInput> = () => {
		user && dispatch(fetchUpdatedUser(user))
	}

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-3xl font-bold mb-6'>Settings</h1>

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
