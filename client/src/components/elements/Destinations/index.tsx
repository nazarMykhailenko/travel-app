import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { Categories } from './Categories'
import { DestinationItem } from './DestinationItem'
import { getDestinations } from '../../../redux/destinations/slice'
import { DestinationLoadingStatus } from '../../../redux/destinations/types'

export const Destinations: React.FC = () => {
	const dispatch = useAppDispatch()
	const { status, destinations } = useAppSelector((state) => state.destinations)

	React.useEffect(() => {
		dispatch(getDestinations())
	}, [])

	return (
		<div>
			<Categories />
			<div className='flex space-x-4'>
				{status === DestinationLoadingStatus.LOADING
					? 'Loading'
					: destinations.map((item) => (
							<DestinationItem key={item._id} {...item} />
					  ))}
			</div>
		</div>
	)
}
