import { Loading } from '../../@types/global'

export interface updateSavedStatusDetails {
	id: string
	currentSavedStatus: boolean
}

interface ILocation {
	city: string
	country: string
}

interface IInfo {
	desc: string
	sumUp: string
	img: string
}

export interface ITicket {
	_id: string
	time: Date
	price: number
}

export interface IHotel {
	name: string
	img: string
	city: string
}

export interface IDestination {
	_id: string
	location: ILocation
	info: IInfo
	tickets: Array<ITicket>
	hotelsAvailable: Array<IHotel>
	rating: string
	isSaved: boolean
}

export interface IDestinationState {
	status: Loading
	destinations: Array<IDestination>
	savedList: Array<IDestination>
}
