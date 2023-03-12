import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Navigation } from '../components/layout/Navigation'

export const HomePage: React.FC = () => {
	const { pathname } = useLocation()
	const pageName =
		pathname !== `/`
			? pathname.slice(1).replace(`-`, ` `)[0].toUpperCase() +
			  pathname.slice(1).replace(`-`, ` `).slice(1)
			: `Browse`

	return (
		<>
			<Navigation />
			<div className='page pl-[16.66666%]'>
				<Header text={pageName} />
				<div className='content'>
					<Outlet />
				</div>
			</div>
		</>
	)
}
