import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { AiOutlineEdit } from 'react-icons/ai'
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
	const [isEditable, setEditable] = React.useState<boolean>(false)
	const [inputValue, setInputValue] = React.useState<string>(value)

	const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
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
							onChange={changeInputValue}
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
