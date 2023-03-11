import React from 'react'
import { Button } from '../common/Button'
import { SearchBar } from '../elements/SearchBar'

export const Header: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className='w-full p-10 flex items-center space-x-10'>
			<div className='w-3/4 flex justify-between'>
				<h2 className='text-[2.5rem] font-bold flex-grow'>{text}</h2>
				<SearchBar />
			</div>
			<div className='flex items-center space-x-8 w-1/4'>
				<Button transparent>Log in</Button>
				<Button>Sign up</Button>
			</div>
		</div>
	)
}
