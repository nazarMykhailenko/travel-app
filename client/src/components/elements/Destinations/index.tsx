import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { Categories } from './Categories'
import { DestinationItem } from './DestinationItem'
import { getDestinations } from '../../../redux/destinations/slice'
import { Loading } from '../../../@types/global'
import { Skeleton } from './Skeleton'

export const Destinations: React.FC = () => {
	const dispatch = useAppDispatch()
	const { status, destinations } = useAppSelector((state) => state.destinations)

	React.useEffect(() => {
		dispatch(getDestinations())
	}, [])

	return (
		<div>
			<Categories />
			{/* {status === Loading.LOADING ? (
				Array(4)
					.fill(null)
					.map(() => <Skeleton />)
			) : ( */}
			<Swiper spaceBetween={20} slidesPerView={4}>
				{status === Loading.LOADING ? (
					<div className='flex space-x-4'>
						{Array(4)
							.fill(null)
							.map(() => (
								<Skeleton />
							))}
					</div>
				) : (
					destinations.map((item) => (
						<SwiperSlide key={item._id}>
							<DestinationItem {...item} />
						</SwiperSlide>
					))
				)}
			</Swiper>
			{/* )} */}
		</div>
	)
}
