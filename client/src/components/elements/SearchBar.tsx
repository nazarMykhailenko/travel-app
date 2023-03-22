import React from 'react'
import { SearchContext } from '../../App'
import { FaSearch, FaTimes } from 'react-icons/fa'

export const SearchBar: React.FC = () => {
	const { searchValue, setSearchValue } = React.useContext(SearchContext)
	const inputRef = React.useRef<HTMLInputElement>(null)

	const focusOnInput = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}
	const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}
	const clearValue = () => {
		setSearchValue(``)
		focusOnInput()
	}

	return (
		<div className='flex items-center px-4 py-3 border rounded-2xl overflow-hidden min-w-[17rem]'>
			<div className='cursor-pointer' onClick={focusOnInput}>
				<FaSearch className='text-md mr-4' />
			</div>
			<input
				ref={inputRef}
				value={searchValue}
				onChange={changeValue}
				placeholder='Search destination'
				type='text'
				className='bg-transparent outline-none flex-1'
			/>
			<div
				className={`cursor-pointer transition-all ${
					searchValue ? 'opacity-100' : 'opacity-0'
				}`}
				onClick={clearValue}
			>
				<FaTimes className='text-md ml-4' />
			</div>
		</div>
	)
}
