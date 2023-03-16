import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Loading } from '../../@types/global'
import { IUser, IUserState, ILogInDetails } from './types'

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (userInfo: IUser) => {
		try {
			const body = JSON.stringify(userInfo)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.post<IUser>(
				'http://localhost:4444/auth/register',
				body,
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to register user: ${err}`)
		}
	}
)

export const logInUser = createAsyncThunk(
	'user/logInUser',
	async (userInfo: ILogInDetails) => {
		try {
			const body = JSON.stringify(userInfo)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.post<IUser>(
				'http://localhost:4444/auth/login',
				body,
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to log in: ${err}`)
		}
	}
)

export const fetchUpdatedUser = createAsyncThunk(
	'user/fetchUpdatedUser',
	async (user: IUser) => {
		try {
			const body = JSON.stringify(user)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.patch<IUser>(
				`http://localhost:4444/auth/${user._id}`,
				body,
				{
					headers,
				}
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to update: ${err}`)
		}
	}
)

const initialState: IUserState = {
	status: Loading.LOADING,
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut(state) {
			state.user = null
		},
		updateUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		// register
		builder.addCase(registerUser.pending, (state, action) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			registerUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(registerUser.rejected, (state, action) => {
			state.status = Loading.ERROR
			state.user = null
		})

		// login
		builder.addCase(logInUser.pending, (state, action) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			logInUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(logInUser.rejected, (state, action) => {
			state.status = Loading.ERROR
			state.user = null
		})

		// update
		builder.addCase(fetchUpdatedUser.pending, (state, action) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			fetchUpdatedUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(fetchUpdatedUser.rejected, (state, action) => {
			state.status = Loading.ERROR
			state.user = null
		})
	},
})

// Action creators are generated for each case reducer function
export const { logOut, updateUser } = userSlice.actions

export default userSlice.reducer
