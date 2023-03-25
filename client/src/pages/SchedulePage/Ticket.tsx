import React from 'react'
import { Link } from 'react-router-dom'
import { ITicket } from '../../redux/destinations/types'
import { useAppSelector } from '../../redux/store'

interface ITicketProps {
	ticket: ITicket
	link: string
	destinationId: string
}

export const Ticket: React.FC<ITicketProps> = (props) => {
	const { link, ticket, destinationId } = props
	const { destinations } = useAppSelector((state) => state.destinations)
	const formattedTime = new Date(ticket.time).toLocaleDateString('en-GB', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
	})

	const currentDestination = destinations.find(
		(destination) => destination._id === destinationId
	)

	return (
		<Link
			to={link}
			className='block border border-gray-200 rounded-md p-4 mb-4'
		>
			<div className='flex justify-between items-center mb-2'>
				<div className='text-lg font-medium'>
					Ticket #{ticket._id}
					{currentDestination ? ` (${currentDestination.location.city})` : ''}
				</div>
				<div className='text-gray-500 text-sm'>{formattedTime}</div>
			</div>
			<div className='text-gray-700'>
				<div className='mb-2'>Price: {ticket.price} $</div>
			</div>
		</Link>
	)
}
