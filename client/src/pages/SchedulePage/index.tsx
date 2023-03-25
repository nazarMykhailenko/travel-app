import React from 'react'
import { Ticket } from './Ticket'
import { useAppSelector } from '../../redux/store'
import { ITicket } from '../../redux/destinations/types'

export const SchedulePage: React.FC = () => {
	const { destinations } = useAppSelector((state) => state.destinations)

	let tickets: (ITicket & { index: number })[] = []
	destinations.forEach((destination) => {
		destination.tickets.forEach((ticket, index) =>
			tickets.push({ ...ticket, index })
		)
	})

	tickets = tickets.sort((a, b) => {
		const timeA = new Date(a.time)
		const timeB = new Date(b.time)
		return timeA.getTime() - timeB.getTime()
	})

	const findCurrentDestinationId = (ticketId: string): string => {
		const currentDestination = destinations.find((destination) =>
			destination.tickets.some((ticket) => ticket._id === ticketId)
		)

		if (currentDestination) return currentDestination._id
		return ''
	}

	return (
		<div className='px-10 pb-10 w-full'>
			<h2 className='text-2xl font-medium mb-4'>Tickets</h2>
			{tickets.length > 0 ? (
				<div className='space-y-4'>
					{tickets.map((ticket) => (
						<Ticket
							link={`/but-ticket/${findCurrentDestinationId(ticket._id)}/${
								ticket.index
							}`}
							destinationId={findCurrentDestinationId(ticket._id)}
							ticket={ticket}
							key={ticket._id}
						/>
					))}
				</div>
			) : (
				<div className='text-gray-500'>No tickets available at the moment.</div>
			)}
		</div>
	)
}
