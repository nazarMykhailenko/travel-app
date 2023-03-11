import React from 'react'

export const Categories: React.FC = () => {
	return (
		<div className='flex space-x-10 mb-5'>
			<div className='w-1/2 flex justify-between'>
				<div className='text-xl font-bold'>Destination</div>
				<select className='block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
					<option>City</option>
					<option>Prague</option>
					<option>Tokio</option>
				</select>
			</div>
			<div className='w-1/2 flex justify-between'>
				<div className='text-xl font-bold'>Hotel</div>
				<select className='block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
					<option>Nearest</option>
					<option>1 mile</option>
					<option>5 miles</option>
				</select>
			</div>
		</div>
	)
}
