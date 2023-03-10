import { Loading } from '../../@types/global'

interface ILocation {
	city: string
	country: string
}

interface IInfo {
	desc: string
	sumUp: string
	img: string
}

interface ITickets {
	time: Date
	price: number
}

interface IHotel {
	name: string
	img: string
	city: string
}

export interface IDestination {
	_id: string
	location: ILocation
	info: IInfo
	tickets: ITickets
	hotelsAvailable: Array<IHotel>
	rating: string
	isSaved: boolean
}

export interface IDestinationState {
	status: Loading
	destinations: Array<IDestination>
}
