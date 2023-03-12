import React from 'react'
import { MainLayout } from './layout/MainLayout'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RegistrationPage } from './pages/RegistrationPage'
import { BrowsePage } from './pages/BrowsePage'
import { LogInPage } from './pages/LogInPage'
import { SavedPlace } from './pages/SavedPlace'
import './App.scss'

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<HomePage />}>
						<Route path='/' element={<BrowsePage />} />
						<Route path='/saved-place' element={<SavedPlace />} />
					</Route>
					<Route path='/sign-up' element={<RegistrationPage />} />
					<Route path='/log-in' element={<LogInPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
