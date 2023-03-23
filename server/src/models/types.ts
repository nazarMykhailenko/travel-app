export interface IUser {
	fullName: string
	email: string
	passwordHash: string
	avatar?: string
}

export interface ILocation {
	city: string
	country: string
}

export interface IInfo {
	desc: string
	sumUp: string
	img: string
}

export interface ITicket {
	time: Date
	price: number
}

export interface IHotel {
	name: string
	img: string
	city: string
}

export interface IDestination {
	location: ILocation
	info: IInfo
	tickets: Array<ITicket>
	hotelsAvailable: Array<IHotel>
	rating: string
	isSaved: boolean
}
