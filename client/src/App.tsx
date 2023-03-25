import React from 'react'
import { MainLayout } from './layout/MainLayout'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RegistrationPage } from './pages/RegistrationPage'
import { BrowsePage } from './pages/BrowsePage'
import { LogInPage } from './pages/LoginPage'
import { SavedPlacePage } from './pages/SavedPlacePage'
import { SettingsPage } from './pages/SettingsPage'
import { DestinationPage } from './pages/DestinationPage'
import { LocationsPage } from './pages/LocationsPage'
import { BuyTicketPage } from './pages/BuyTicketPage'
import { PhotoSpotPage } from './pages/PhotoSpotPage'
import './App.scss'
import { SchedulePage } from './pages/SchedulePage'

interface SearchContextType {
	searchValue: string | undefined
	setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const SearchContext = React.createContext<SearchContextType>({
	searchValue: '',
	setSearchValue: () => {},
})

const App: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState<string>()

	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route path='/' element={<HomePage />}>
							<Route path='/' element={<BrowsePage />} />
							<Route path='/saved-place' element={<SavedPlacePage />} />
							<Route path='/destination/:id' element={<DestinationPage />} />
							<Route path='/locations' element={<LocationsPage />} />
							<Route path='/schedule' element={<SchedulePage />} />
							<Route path='/photo-spot' element={<PhotoSpotPage />} />
						</Route>
						<Route path='/sign-up' element={<RegistrationPage />} />
						<Route path='/log-in' element={<LogInPage />} />
						<Route path='/settings' element={<SettingsPage />} />
						<Route
							path='/but-ticket/:destinationId/:ticketIndex'
							element={<BuyTicketPage />}
						/>
					</Route>
				</Routes>
			</SearchContext.Provider>
		</div>
	)
}

export default App
