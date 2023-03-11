import React from 'react'
import { MdStarRate, MdOutlineLocationOn } from 'react-icons/md'
import { IListItem } from '.'

interface IDestinationItem extends IListItem {}

export const DestinationItem: React.FC<IDestinationItem> = ({
	img,
	city,
	country,
	rating,
}) => {
	return (
		<div className='relative rounded-xl overflow-hidden w-1/3 cursor-pointer'>
			<img
				src={img}
				alt={`${city} picture`}
				className='w-full h-64 object-cover object-center'
			/>
			<div className='absolute top-0 right-0 px-2 py-1 bg-gray-800 text-white'>
				<span className='font-bold'>{rating}</span>
				<MdStarRate className='inline-block ml-1' />
			</div>
			<div className='absolute bottom-0 left-0 p-4 text-white w-full bg-black bg-opacity-30'>
				<div className='text-xl font-bold mb-2'>{city}</div>
				<div className='flex items-center'>
					<MdOutlineLocationOn className='inline-block mr-1' />
					<span>{country}</span>
				</div>
			</div>
		</div>
	)
}
