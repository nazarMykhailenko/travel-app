import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/Button'

interface ILocationCardProps {
	city: string
	country: string
	desc: string
	_id: string
}

export const LocationCard: React.FC<ILocationCardProps> = (props) => {
	const { city, country, desc, _id } = props
	const navigate = useNavigate()

	return (
		<div className='p-6 rounded-md shadow-md bg-white'>
			<h2 className='text-xl font-medium mb-2'>
				{city}, {country}
			</h2>
			<p className='text-gray-500 text-sm mb-4'>{desc}</p>
			<Button
				onClick={() => navigate(`/destination/${_id}`)}
				otherStyles='bg-blue-500'
			>
				View Details
			</Button>
		</div>
	)
}
