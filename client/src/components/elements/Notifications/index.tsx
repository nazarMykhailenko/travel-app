import React from 'react'
import {
	MdRestaurantMenu,
	MdOutlineAirplaneTicket,
	MdHotel,
} from 'react-icons/md'
import { NotificationsItem } from './NotificationsItem'

export interface IListItem {
	icon: React.ReactElement<any, any>
	text: string
	desc: string
}

export const Notifications: React.FC = () => {
	const list: Array<IListItem> = [
		{
			icon: <MdOutlineAirplaneTicket />,
			text: `Ticket purchase`,
			desc: `Secure Your Seats Today`,
		},
		{
			icon: <MdHotel />,
			text: `Hotel booking`,
			desc: `Find Your Dream Destination`,
		},
		{
			icon: <MdRestaurantMenu />,
			text: `Restaurant reservation`,
			desc: `Reserve Your Table Today`,
		},
	]
	return (
		<div className='w-1/4'>
			<h2 className='font-bold text-lg mb-5'>Notifications</h2>
			<div>
				{list.map((item) => (
					<NotificationsItem {...item} />
				))}
			</div>
			<div className='text-[#EF943D] text-center cursor-pointer'>
				View all...
			</div>
		</div>
	)
}
