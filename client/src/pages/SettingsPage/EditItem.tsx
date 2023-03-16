import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { AiOutlineEdit } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { updateUser } from '../../redux/user/slice'
import { IUser } from '../../redux/user/types'
import { toTitleCase } from '../../utils/toTitleCase'
import { ISettingsPageInput } from './types'

interface IEditItemProps {
	register: UseFormRegister<ISettingsPageInput>
	parameter: 'avatar' | 'fullName' | 'email'
	value: string
}

export const EditItem: React.FC<IEditItemProps> = ({
	parameter,
	value,
	register,
}) => {
	const dispatch = useAppDispatch()
	const { user } = useAppSelector((state) => state.user)
	const [isEditable, setEditable] = React.useState<boolean>(false)
	const [inputValue, setInputValue] = React.useState<string>(value)

	const changeInputValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		parameter: string
	) => {
		setInputValue(e.target.value)
		dispatch(updateUser({ ...user, [parameter]: e.target.value } as IUser))
	}

	return (
		<div className='mb-8'>
			<div className='mb-2'>{toTitleCase(parameter)}</div>
			<div className='flex items-center space-x-4'>
				<div>
					{isEditable ? (
						<input
							{...register(parameter, {
								required: `${toTitleCase(parameter)} is require field!`,
							})}
							className='w-[12rem] border-b outline-none'
							value={inputValue}
							onChange={(e) => changeInputValue(e, parameter)}
						/>
					) : (
						<div className='w-[12rem]'>{value}</div>
					)}
				</div>
				<div>
					<AiOutlineEdit
						onClick={() => setEditable((prev) => !prev)}
						className='cursor-pointer'
					/>
				</div>
			</div>
		</div>
	)
}
