import React from 'react'
import { Button } from '../../common/Button'
import { Skeleton } from './Skeleton'
import { fetchDestinationById } from '../../../utils/fetchDestinationById'
import { IDestination } from '../../../redux/destinations/types'
import { useNavigate } from 'react-router'

export const Preview: React.FC = () => {
	const navigate = useNavigate()
	const [element, setElement] = React.useState<IDestination | undefined>(
		undefined
	)
	const [loading, setLoading] = React.useState<boolean>(false)

	const currentId = '640f7ee6e9587f791f7ad3da'

	React.useEffect(() => {
		fetchDestinationById(currentId, setLoading, setElement)
	}, [currentId])

	if (loading || !element) {
		return <Skeleton />
	}

	return (
		<div className='w-3/4 mx-auto pb-20 rounded-lg overflow-hidden relative'>
			<div className='absolute z-10 w-full h-full bg-gradient-to-tr from-black to-transparent'></div>
			<img
				className='absolute w-full h-auto object-cover object-bottom'
				src={element.info.img}
				alt='preview picture'
			/>
			<div className='relative z-20 p-8 w-full h-full text-[#F9F6F8]'>
				<h2 className='text-2xl font-bold mb-4'>{element.location.city}</h2>
				<p className='font-light mb-4'>{element.info.sumUp}</p>
				<div className='flex items-center space-x-4'>
					<Button onClick={() => navigate(`/but-ticket/${element._id}/0`)} dark>
						Book ticket
					</Button>
				</div>
			</div>
		</div>
	)
}
