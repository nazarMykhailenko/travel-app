import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navigation'

export const HomePage: React.FC = () => {
	return (
		<>
			<Navigation />
			<div className='page pl-[16.66666%]'>
				<Header text={'Travelopia'} />
				<div className='content'>
					<Outlet />
				</div>
			</div>
		</>
	)
}
