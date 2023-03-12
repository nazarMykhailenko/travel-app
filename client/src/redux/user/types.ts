export enum UserLoadingStatus {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

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
	status: UserLoadingStatus
	user: IUser | null
}
