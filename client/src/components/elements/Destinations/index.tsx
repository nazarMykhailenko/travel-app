import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { Categories } from './Categories'
import { DestinationItem } from './DestinationItem'
import { getDestinations } from '../../../redux/destinations/slice'
import { DestinationLoadingStatus } from '../../../redux/destinations/types'
import { Skeleton } from './Skeleton'

export const Destinations: React.FC = () => {
	const dispatch = useAppDispatch()
	const { status, destinations } = useAppSelector((state) => state.destinations)

	const preview = destinations.slice(0, 4)

	React.useEffect(() => {
		dispatch(getDestinations())
	}, [])

	return (
		<div>
			<Categories />
			<div className='flex space-x-4'>
				{status === DestinationLoadingStatus.LOADING
					? Array(4)
							.fill(null)
							.map(() => <Skeleton />)
					: preview.map((item) => <DestinationItem key={item._id} {...item} />)}
			</div>
		</div>
	)
}
