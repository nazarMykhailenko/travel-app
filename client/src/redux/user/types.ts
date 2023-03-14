import { Loading } from '../../@types/global'

export interface ILogInDetails {
	email: string
	password: string
}

export interface IUser {
	fullName: string
	email: string
	password: string
}

export interface IUserState {
	status: Loading
	user: IUser | null
}
