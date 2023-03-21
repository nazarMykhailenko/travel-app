import React from 'react'
import { useAppSelector } from '../../redux/store'
import { SavedItem } from './SavedItem'

export const SavedPlacePage: React.FC = () => {
	const { savedList } = useAppSelector((state) => state.destinations)

	return (
		<div className='px-10 pb-10 w-full flex flex-col'>
			<h1 className='text-2xl font-medium mb-4'>My Saved Places</h1>
			<div className='flex flex-wrap justify-center gap-8 p-8'>
				{savedList.map((destination) => (
					<SavedItem key={destination._id} {...destination} />
				))}
			</div>
		</div>
	)
}
