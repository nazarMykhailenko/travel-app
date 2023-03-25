import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/common/Button'
import { IDestination } from '../../redux/destinations/types'

interface ISavedItemProps extends IDestination {}

export const SavedItem: React.FC<ISavedItemProps> = (props) => {
	const navigate = useNavigate()
	const { _id, info, location, rating } = props

	return (
		<div
			key={_id}
			className='bg-white rounded-md shadow-md w-80 h-96 overflow-hidden'
		>
			<img
				src={info.img}
				alt={info.desc}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4'>
				<h2 className='text-lg font-bold mb-2'>
					{location.city}, {location.country}
				</h2>
				<p className='text-sm text-gray-600 mb-4'>{info.sumUp}</p>
				<div className='flex items-center justify-between'>
					<Button onClick={() => navigate(`/but-ticket/${_id}/0`)} transparent>
						Book now
					</Button>
					<span className='text-gray-900 text-xl'>{rating}</span>
				</div>
			</div>
		</div>
	)
}
