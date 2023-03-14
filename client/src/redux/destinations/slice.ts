import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Loading } from '../../@types/global'
import { IDestinationState, IDestination } from './types'

export const getDestinations = createAsyncThunk(
	'destinations/getDestinations',
	async () => {
		try {
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.get<IDestination[]>(
				'http://localhost:4444/destinations',
				{
					headers,
				}
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to get destinations: ${err}`)
		}
	}
)

const initialState: IDestinationState = {
	status: Loading.LOADING,
	destinations: [],
}

export const destinationSlice = createSlice({
	name: 'destinations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDestinations.pending, (state, action) => {
			state.status = Loading.LOADING
			state.destinations = []
		})
		builder.addCase(
			getDestinations.fulfilled,
			(state, action: PayloadAction<IDestination[]>) => {
				state.status = Loading.SUCCESS
				state.destinations = action.payload
			}
		)
		builder.addCase(getDestinations.rejected, (state, action) => {
			state.status = Loading.ERROR
			state.destinations = []
		})
	},
})

// Action creators are generated for each case reducer function
export const {} = destinationSlice.actions

export default destinationSlice.reducer
