import { fetchUpdatedUser } from './../user/slice'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { removeArrayElement } from '../../utils/removeArrayElement'
import { Loading } from '../../@types/global'
import {
	IDestinationState,
	IDestination,
	updateSavedStatusDetails,
} from './types'
import { replaceArrayItem } from '../../utils/replaceArrayItem'

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

export const fetchSavedStatus = createAsyncThunk(
	'destinations/fetchSavedStatus',
	async ({ id, currentSavedStatus }: updateSavedStatusDetails) => {
		try {
			const headers = { 'Content-Type': 'application/json' }
			const response = await axios.patch<IDestination>(
				`http://localhost:4444/destinations/${id}`,
				{ currentSavedStatus },
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to update saved status: ${err}`)
		}
	}
)

const initialState: IDestinationState = {
	status: Loading.LOADING,
	destinations: [],
	savedList: [],
}

export const destinationSlice = createSlice({
	name: 'destinations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// get destinations
		builder.addCase(getDestinations.pending, (state, action) => {
			state.status = Loading.LOADING
			state.destinations = []
		})
		builder.addCase(
			getDestinations.fulfilled,
			(state, action: PayloadAction<IDestination[]>) => {
				state.status = Loading.SUCCESS
				state.destinations = action.payload
				state.savedList = state.destinations.filter(
					(destination) => destination.isSaved
				)
			}
		)
		builder.addCase(getDestinations.rejected, (state, action) => {
			state.status = Loading.ERROR
			state.destinations = []
		})

		// update saved status
		builder.addCase(fetchSavedStatus.pending, (state, action) => {
			state.status = Loading.LOADING
		})
		builder.addCase(
			fetchSavedStatus.fulfilled,
			(state, action: PayloadAction<IDestination>) => {
				state.status = Loading.SUCCESS
				const destinationId = action.payload._id

				const currentDestination = state.destinations.find(
					(destination) => destination._id === destinationId
				)

				if (currentDestination) {
					state.destinations = replaceArrayItem(
						state.destinations,
						currentDestination,
						action.payload
					)
				}

				state.savedList = state.destinations.filter(
					(destination) => destination.isSaved
				)
			}
		)
		builder.addCase(fetchSavedStatus.rejected, (state, action) => {
			state.status = Loading.ERROR
		})
	},
})

// Action creators are generated for each case reducer function
export const {} = destinationSlice.actions

export default destinationSlice.reducer
