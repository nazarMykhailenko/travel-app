import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState, UserLoadingStatus } from './types'

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

const initialState: IUserState = {
	status: UserLoadingStatus.LOADING,
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut(state) {
			state.user = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state, action) => {
			state.status = UserLoadingStatus.LOADING
			state.user = null
		})
		builder.addCase(
			registerUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = UserLoadingStatus.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(registerUser.rejected, (state, action) => {
			state.status = UserLoadingStatus.ERROR
			state.user = null
		})
	},
})

// Action creators are generated for each case reducer function
export const { logOut } = userSlice.actions

export default userSlice.reducer
