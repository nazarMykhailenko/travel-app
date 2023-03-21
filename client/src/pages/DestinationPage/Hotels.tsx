import React from 'react'
import { IHotel } from '../../redux/destinations/types'

interface IHotelsProps {
	hotels: IHotel[]
}

export const Hotels: React.FC<IHotelsProps> = ({ hotels }) => {
	return (
		<>
			<h2 className='text-2xl font-bold text-gray-900 mb-2'>
				Hotels Available
			</h2>
			<ul className='list-disc list-inside text-gray-500'>
				{hotels.map((hotel) => (
					<li key={hotel.name}>
						<img
							className='w-16 h-16 rounded-full shadow-lg mr-4 mb-4 inline-block'
							src={hotel.img}
							alt={hotel.name}
						/>
						<div className='inline-block'>
							<p className='text-gray-900 font-medium'>{hotel.name}</p>
							<p className='text-gray-500'>{hotel.city}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}
