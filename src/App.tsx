import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { BrowsePage } from './pages/BrowsePage'
import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'
import './App.scss'

const App: React.FC = () => {
	const { pathname } = useLocation()
	const pageName =
		pathname !== `/`
			? pathname.slice(1).replace(`-`, ` `)[0].toUpperCase() +
			  pathname.slice(1).replace(`-`, ` `).slice(1)
			: `Browse`

	return (
		<div className='wrapper'>
			<Navigation />
			<div className='page'>
				<Header text={pageName} />
				<div className='content'>
					<Routes>
						<Route path='/' element={<BrowsePage />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
