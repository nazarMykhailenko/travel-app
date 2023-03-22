import React from 'react'
import { useAppSelector } from '../../redux/store'
import { LocationCard } from './LocationCard'

export const LocationsPage: React.FC = () => {
	const { destinations } = useAppSelector((state) => state.destinations)

	return (
		<div className='px-10 pb-10 w-full flex flex-col'>
			<h1 className='text-2xl font-medium mb-4'>
				Discover your next destination
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{destinations.map((destination) => (
					<LocationCard
						key={destination._id}
						{...{
							...destination.location,
							desc: destination.info.desc,
							_id: destination._id,
						}}
					/>
				))}
			</div>
		</div>
	)
}
