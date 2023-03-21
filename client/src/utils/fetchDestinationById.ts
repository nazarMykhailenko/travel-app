import axios, { AxiosHeaders } from 'axios'
import { IDestination } from '../redux/destinations/types'

export async function fetchDestinationById(
	id: string,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setElement: React.Dispatch<React.SetStateAction<IDestination | undefined>>
) {
	try {
		setLoading(true)
		const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
		const { data } = await axios.get<IDestination>(
			`http://localhost:4444/destinations/${id}`,
			{
				headers,
			}
		)

		setLoading(false)
		setElement(data)
	} catch (err) {
		console.log(`Failed to get this destination: ${err}`)
	}
}
