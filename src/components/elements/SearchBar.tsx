import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

export const SearchBar: React.FC = () => {
	const [value, setValue] = React.useState(``)
	const inputRef = React.useRef<HTMLInputElement>(null)

	const focusOnInput = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}
	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	const clearValue = () => {
		setValue(``)
		focusOnInput()
	}

	return (
		<div className='flex items-center px-4 py-3 border rounded-2xl overflow-hidden min-w-[17rem] mr-40'>
			<div className='cursor-pointer' onClick={focusOnInput}>
				<FaSearch className='text-md mr-4' />
			</div>
			<input
				ref={inputRef}
				value={value}
				onChange={changeValue}
				placeholder='Search destination'
				type='text'
				className='bg-transparent outline-none flex-1'
			/>
			<div
				className={`cursor-pointer transition-all ${
					value ? 'opacity-100' : 'opacity-0'
				}`}
				onClick={clearValue}
			>
				<FaTimes className='text-md ml-4' />
			</div>
		</div>
	)
}
