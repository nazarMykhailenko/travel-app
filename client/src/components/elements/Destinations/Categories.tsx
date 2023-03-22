import React from 'react'
import { useAppSelector } from '../../../redux/store'

interface ICategories {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Categories: React.FC<ICategories> = ({ value, setValue }) => {
	const { destinations } = useAppSelector((state) => state.destinations)
	const cities = destinations.map((destination) => destination.location.city)

	const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value)
	}

	return (
		<div className='w-1/2 flex justify-between mb-10'>
			<div className='text-xl font-bold'>Destination</div>
			<select
				value={value}
				onChange={changeSelectValue}
				className='block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
			>
				<option>City</option>
				{cities.map((city) => (
					<option key={city}>{city}</option>
				))}
			</select>
		</div>
	)
}
