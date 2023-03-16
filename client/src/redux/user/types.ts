import { Loading } from '../../@types/global'
import { ObjectId } from 'mongodb'

export interface ILogInDetails {
	email: string
	password: string
}

export interface IUser {
	_id: ObjectId
	fullName: string
	email: string
	password: string
	avatar?: string
}

export interface IUserState {
	status: Loading
	user: IUser | null
}
