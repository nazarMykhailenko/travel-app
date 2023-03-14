import React from 'react'

export const Categories: React.FC = () => {
	return (
		<div className='w-1/2 flex justify-between mb-10'>
			<div className='text-xl font-bold'>Destination</div>
			<select className='block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
				<option>City</option>
				<option>Prague</option>
				<option>Tokio</option>
			</select>
		</div>
	)
}
