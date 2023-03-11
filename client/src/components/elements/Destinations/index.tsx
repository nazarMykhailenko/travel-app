import React from 'react'
import { Categories } from './Categories'
import { DestinationItem } from './DestinationItem'

export interface IListItem {
	img: string
	city: string
	country: string
	rating: string
}

export const Destinations: React.FC = () => {
	const list: Array<IListItem> = [
		{
			img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			city: 'Prague',
			country: 'Czech Republic',
			rating: '9.5',
		},
		{
			img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
			city: 'Istanbul',
			country: 'Turkey',
			rating: '7.8',
		},
		{
			img: 'https://images.unsplash.com/photo-1591994717566-b50f283b4e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
			city: 'Kyiv',
			country: 'Ukraine',
			rating: '8.9',
		},
	]

	return (
		<div className='flex-grow w-3/4'>
			<Categories />
			<div className='flex space-x-4'>
				{list.map((item) => (
					<DestinationItem {...item} />
				))}
			</div>
		</div>
	)
}
