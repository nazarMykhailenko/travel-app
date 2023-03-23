import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useAppSelector } from '../redux/store'

export const BuyTicketPage: React.FC = () => {
	const { destinationId, ticketIndex } = useParams()
	const { destinations } = useAppSelector((state) => state.destinations)

	const currentDestination = destinations.find(
		(destination) => destination._id === destinationId
	)
	const currentTicket = ticketIndex
		? currentDestination?.tickets[+ticketIndex]
		: undefined

	if (!currentDestination || !currentTicket) return <div>Loading...</div>

	const time = new Date(currentTicket.time)

	return (
		<div className='flex flex-col justify-center items-center mt-8'>
			<h2 className='text-2xl font-bold text-gray-900 mb-4'>Buy Ticket</h2>
			<div className='flex flex-col justify-center items-center mb-8'>
				<div className='flex flex-row items-center justify-center mb-4'>
					<div className='bg-blue-500 text-white rounded-lg px-2 py-1 mr-4 text-sm font-medium'>
						{time.toLocaleDateString('en-GB', {
							year: '2-digit',
							month: '2-digit',
							day: '2-digit',
						})}
					</div>
					<div className='text-lg font-bold'>
						{currentDestination.location.city}
					</div>
				</div>
				<div className='mb-4'>
					<img
						className='w-64'
						src={currentDestination.info.img}
						alt='destination'
					/>
				</div>
				<div className='mb-4'>
					<div className='text-lg font-bold mb-2'>
						{currentDestination.info.sumUp}
					</div>
					<div>{currentDestination.info.desc}</div>
				</div>
				<div className='text-lg font-bold mb-2'>
					Price: ${currentTicket.price}
				</div>
				<Button otherStyles='bg-blue-500 hover:bg-blue-700'>Buy Ticket</Button>
			</div>
		</div>
	)
}
