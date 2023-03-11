import React from 'react'
import { Preview } from '../components/elements/Preview'
import { Notifications } from '../components/elements/Notifications'
import { Destinations } from '../components/elements/Destinations'
import { Location } from '../components/elements/Location'

export const BrowsePage: React.FC = () => {
	return (
		<div className='px-10 pb-10 w-full flex flex-col'>
			<div className='flex mb-10 space-x-10'>
				<Preview />
				<Notifications />
			</div>
			<div className='flex space-x-10'>
				<Destinations />
				<Location />
			</div>
		</div>
	)
}
