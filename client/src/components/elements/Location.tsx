import React from 'react'

export const Location: React.FC = () => {
	return (
		<div className='w-1/4'>
			<div className='text-xl font-bold mb-7'>Locations</div>
			<div>
				<img
					className='w-full h-64 object-cover'
					src='https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
					alt='location'
				/>
			</div>
		</div>
	)
}
