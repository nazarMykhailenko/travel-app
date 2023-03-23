import React from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Tickets } from './Tickets'
import { fetchDestinationById } from '../../utils/fetchDestinationById'
import { IDestination } from '../../redux/destinations/types'
import { Hotels } from './Hotels'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchSavedStatus } from '../../redux/destinations/slice'

export const DestinationPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { id } = useParams()
	const { savedList } = useAppSelector((state) => state.destinations)
	const [element, setElement] = React.useState<IDestination | undefined>(
		undefined
	)
	const [loading, setLoading] = React.useState<boolean>(false)

	React.useEffect(() => {
		console.log('new element')
		id
			? fetchDestinationById(id, setLoading, setElement)
			: console.log(`Failed to get element`)
	}, [savedList.length])

	const updateSavedStatus = () => {
		if (element) {
			dispatch(
				fetchSavedStatus({
					id: element._id,
					currentSavedStatus: element.isSaved,
				})
			)
		}
	}

	if (loading || !element) {
		return <div>Loading</div>
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2 lg:w-3/5'>
					<img
						className='w-full max-h-[30rem] object-cover h-auto rounded-lg shadow-lg mb-8 md:mb-0'
						src={element.info.img}
						alt={element.location.city}
					/>
				</div>

				<div className='md:w-1/2 lg:w-2/5 md:pl-12 lg:pl-16'>
					<div className='flex space-x-4 items-center mb-4'>
						<h1 className='text-4xl font-extrabold text-gray-900'>
							{element.location.city}
						</h1>
						<div>
							{element.isSaved ? (
								<FaHeart
									onClick={updateSavedStatus}
									className='inline-block text-red-500 ml-2 text-3xl cursor-pointer'
								/>
							) : (
								<FaRegHeart
									onClick={updateSavedStatus}
									className='inline-block text-gray-900 mr-2 text-3xl cursor-pointer'
								/>
							)}
						</div>
					</div>
					<p className='text-gray-500 mb-6'> {element.info.sumUp} </p>

					<h2 className='text-2xl font-bold text-gray-900 mb-2'>Location</h2>
					<p className='text-gray-500 mb-6'>
						{element.location.city}, {element.location.country}
					</p>

					<h2 className='text-2xl font-bold text-gray-900 mb-2'>Description</h2>
					<p className='text-gray-500 mb-6'> {element.info.desc} </p>

					<Tickets destination={element} />

					<Hotels hotels={element.hotelsAvailable} />
				</div>
			</div>
		</div>
	)
}
