import React from 'react'
import { MdStarRate, MdOutlineLocationOn } from 'react-icons/md'
import { IDestination } from '../../../redux/destinations/types'

interface IDestinationItem extends IDestination {}

export const DestinationItem: React.FC<IDestinationItem> = (props) => {
	const { location, info, tickets, hotelsAvailable, rating, isSaved } = props
	return (
		<div className='relative rounded-xl overflow-hidden cursor-pointer'>
			<img
				src={info.img}
				alt={`${location.city} picture`}
				className='w-full h-64 object-cover object-center'
			/>
			<div className='absolute top-0 right-0 px-2 py-1 bg-gray-800 text-white'>
				<span className='font-bold'>{rating}</span>
				<MdStarRate className='inline-block ml-1' />
			</div>
			<div className='absolute bottom-0 left-0 p-4 text-white w-full bg-black bg-opacity-30'>
				<div className='text-xl font-bold mb-2'>{location.city}</div>
				<div className='flex items-center'>
					<MdOutlineLocationOn className='inline-block mr-1' />
					<span>{location.country}</span>
				</div>
			</div>
		</div>
	)
}
