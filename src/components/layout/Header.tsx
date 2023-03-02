import React from 'react'
import { Button } from '../common/Button'
import { SearchBar } from '../elements/SearchBar'

export const Header: React.FC<{ text: string }> = ({ text }) => {
	return (
		<div className='w-full p-10 flex items-center'>
			<h2 className='text-[2.5rem] font-bold flex-1'>{text}</h2>
			<SearchBar />
			<div className='flex items-center space-x-8'>
				<Button transparent>Log in</Button>
				<Button>Sign up</Button>
			</div>
		</div>
	)
}
