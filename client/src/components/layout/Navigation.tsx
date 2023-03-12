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
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { logOut } from '../../redux/user/slice'
import { Button } from '../common/Button'

export const Navigation: React.FC = () => {
	const dispatch = useAppDispatch()
	const { user } = useAppSelector((state) => state.user)

	const logOutUser = () => {
		dispatch(logOut())
	}

	return (
		<div className='w-1/6 p-10 border-r fixed top-0 left-0 bottom-0'>
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
						{user ? (
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
						) : (
							''
						)}
						<li>
							{user ? (
								<NavLink
									onClick={logOutUser}
									className='flex items-center'
									to=''
								>
									<FaSignOutAlt className='mr-4 text-md' />
									Log out
								</NavLink>
							) : (
								<NavLink className='flex items-center' to='/log-in'>
									<FaSignOutAlt className='mr-4 text-md' />
									Log in
								</NavLink>
							)}
						</li>
					</ul>
				</div>
				<div className='flex flex-col items-center bg-[#EDF7FB] p-4 rounded-2xl'>
					<p className='text-center font-bold text-sm mb-4'>
						Upgrade the<span className='text-[#EF943D]'> app </span>to
						<span className='text-[#EF943D]'> remove </span>
						ads
					</p>
					<Button otherStyles='w-full text-white font-bold text-sm'>
						Upgrade
					</Button>
				</div>
			</div>
		</div>
	)
}
