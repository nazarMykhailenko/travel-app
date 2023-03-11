import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'
import { Button } from '../common/Button'
import previewPic from '../../assets/img/preview.jpg'

export const Preview: React.FC = () => {
	return (
		<div className='w-3/4 rounded-lg overflow-hidden relative'>
			<div className='absolute z-10 w-full h-full bg-gradient-to-tr from-black to-transparent'></div>
			<img
				className='absolute w-full h-auto object-cover'
				src={previewPic}
				alt='preview picture'
			/>
			<div className='relative z-20 p-8 w-full h-full text-[#F9F6F8]'>
				<h2 className='text-2xl font-bold mb-4'>
					Nayhavn Canal
					<span className='text-[#DCB283]'>
						{' '}
						City
						<br /> Boat{' '}
					</span>
					travel
				</h2>
				<p className='font-light mb-4'>
					Experience beautiful Europe, view all
					<br /> across the city with local manual boat.
				</p>
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
