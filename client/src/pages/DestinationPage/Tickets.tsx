import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { IDestination } from '../../redux/destinations/types'

interface ITicketsProps {
	destination: IDestination
}

export const Tickets: React.FC<ITicketsProps> = ({ destination }) => {
	const navigate = useNavigate()

	const openBuyTicketPage = (ticketIndex: number) => {
		navigate(`/but-ticket/${destination._id}/${ticketIndex}`)
	}
	return (
		<>
			<h2 className='text-2xl font-bold text-gray-900 mb-2'>Tickets</h2>
			<ul className='list-disc list-inside text-gray-500 mb-6'>
				{destination.tickets.map((ticket, index) => {
					const date = new Date(ticket.time)

					return (
						<li
							key={index}
							className='bg-white rounded-lg shadow-md p-4 flex justify-between items-center transition duration-300 hover:bg-gray-50'
						>
							<div className='flex items-center'>
								<div className='bg-blue-500 text-white rounded-lg px-2 py-1 mr-4 text-sm font-medium'>
									{date.toLocaleDateString('en-GB', {
										year: '2-digit',
										month: '2-digit',
										day: '2-digit',
									})}
								</div>
								<div>
									<p className='text-gray-900 text-lg font-bold'>
										{`${ticket.price}$`}
									</p>
								</div>
							</div>
							<Button
								onClick={() => openBuyTicketPage(index)}
								otherStyles='bg-blue-500'
							>
								Buy now
							</Button>
						</li>
					)
				})}
			</ul>
		</>
	)
}
