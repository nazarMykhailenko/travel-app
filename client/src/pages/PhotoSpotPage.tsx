import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

export const PhotoSpotPage: React.FC = () => {
	const { destinations } = useAppSelector((state) => state.destinations)
	const images = destinations.map((destination) => {
		return { img: destination.info.img, _id: destination._id }
	})

	return (
		<div className='px-10 pb-10 w-full flex flex-wrap justify-center gap-4'>
			{images.map((image) => (
				<Link
					to={`/destination/${image._id}`}
					key={image._id}
					className='w-1/4 h-80 relative'
				>
					<img
						src={image.img}
						alt='destination image'
						className='w-full h-full object-cover absolute top-0 left-0'
					/>
				</Link>
			))}
		</div>
	)
}
