import React from 'react'
import { IListItem } from '.'

interface INotificationItemProps extends IListItem {}

export const NotificationsItem: React.FC<INotificationItemProps> = ({
	icon,
	text,
	desc,
}) => {
	return (
		<div className='flex items-center space-x-4 mb-5'>
			<div className='text-lg flex items-center justify-center p-4 bg-[#F2F7F8] rounded-xl cursor-pointer'>
				{icon}
			</div>
			<div className='text-md'>
				<h2 className='font-bold'>{text}</h2>
				<p>{desc}</p>
			</div>
		</div>
	)
}
