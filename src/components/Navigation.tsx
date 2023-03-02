import React from 'react'
import {
	FaCompass,
	FaMapMarkerAlt,
	FaClock,
	FaCamera,
	FaHeart,
	FaCog,
	FaSignOutAlt,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Navigation: React.FC = () => {
	return (
		<div className='w-1/6 p-10'>
			<h1 className='text-[2.5rem] font-bold mb-8'>Travels</h1>
			<div>
				<div className='mb-8'>
					<h2 className='text-2xl font-light mb-6'>Main menu</h2>

					<ul className='flex flex-col space-y-4'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
							>
								<FaCompass className='mr-4 text-md' />
								Browse
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/saved-place'
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
							>
								<FaHeart className='mr-4 text-md' />
								Saved place
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/locations'
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
							>
								<FaMapMarkerAlt className='mr-4 text-md' />
								Locations
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/schedule'
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
							>
								<FaClock className='mr-4 text-md' />
								Schedule
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/photo-spot'
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
							>
								<FaCamera className='mr-4 text-md' />
								Photo spot
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='mb-8'>
					<h2 className='text-2xl font-light mb-6'>Secondary</h2>
					<ul className='flex flex-col space-y-4'>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
								to='/settings'
							>
								<FaCog className='mr-4 text-md' />
								Settings
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-[#EF943D] flex items-center'
										: 'hover:text-[#EF943D] flex items-center'
								}
								to='/log-out'
							>
								<FaSignOutAlt className='mr-4 text-md' />
								Log out
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='flex flex-col items-center bg-[#EDF7FB] p-4 rounded-2xl'>
					<p className='text-center font-bold text-sm mb-4'>
						Upgrade the<span className='text-[#EF943D]'> app </span>to
						<span className='text-[#EF943D]'> remove </span>
						ads
					</p>
					<button className='bg-[#92B7C4] w-full py-2 rounded-2xl text-white font-bold text-sm'>
						Upgrade
					</button>
				</div>
			</div>
		</div>
	)
}
