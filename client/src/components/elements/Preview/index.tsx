import React from 'react'
import axios, { AxiosHeaders } from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { Button } from '../../common/Button'
import { Skeleton } from './Skeleton'
import { IDestination } from '../../../redux/destinations/types'

export const Preview: React.FC = () => {
	const [previewElement, setPreviewElement] = React.useState<
		IDestination | undefined
	>(undefined)
	const [loading, setLoading] = React.useState<boolean>(false)

	const currentId = '640f7ee6e9587f791f7ad3da'

	const fetchDestinationById = async (id: string) => {
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
			setPreviewElement(data)
		} catch (err) {
			console.log(`Failed to get this destination: ${err}`)
		}
	}

	console.log(previewElement)

	React.useEffect(() => {
		fetchDestinationById(currentId)
	}, [currentId])

	if (loading) {
		return <Skeleton />
	}

	return (
		<div className='w-3/4 rounded-lg overflow-hidden relative'>
			<div className='absolute z-10 w-full h-full bg-gradient-to-tr from-black to-transparent'></div>
			<img
				className='absolute w-full h-auto object-cover object-bottom'
				src={previewElement?.info.img}
				alt='preview picture'
			/>
			<div className='relative z-20 p-8 w-full h-full text-[#F9F6F8]'>
				<h2 className='text-2xl font-bold mb-4'>
					{previewElement?.location.city}
				</h2>
				<p className='font-light mb-4'>{previewElement?.info.sumUp}</p>
				<div className='flex items-center space-x-4'>
					<Button dark>Book ticket</Button>
					<Link className='flex items-center space-x-1' to='play/nayhavn'>
						<MdOutlineSlowMotionVideo />
						<span>Play Video</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
