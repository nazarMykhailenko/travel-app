import React from 'react'
import { Preview } from '../components/layout/Preview'
import { Notifications } from '../components/elements/Notifications'

export const BrowsePage: React.FC = () => {
	return (
		<div className='px-10 w-full flex flex-col'>
			<div className='flex justify-between'>
				<Preview />
				<Notifications />
			</div>
			<div>Bottom row</div>
		</div>
	)
}
