import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { Button } from '../common/Button'
import { SearchBar } from '../elements/SearchBar'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'

export const Header: React.FC<{ text: string }> = ({ text }) => {
	const navigate = useNavigate()
	const { user } = useAppSelector((state) => state.user)

	const showRegistrationPage = (): void => {
		navigate(`/sign-up`)
	}

	return (
		<div className='w-full p-10 flex items-center space-x-10'>
			<div className='w-3/4 flex justify-between'>
				<h2 className='text-[2.5rem] font-bold flex-grow'>{text}</h2>
				<SearchBar />
			</div>
			<div className='flex items-center space-x-8 w-1/4'>
				{user ? (
					<div className='flex items-center space-x-4'>
						<div>
							<Link to='/settings'>
								<AiOutlineUser className='text-3xl cursor-pointer' />
							</Link>
						</div>
						<div>
							<div className='mb-1'>{user.fullName}</div>
							<div className='font-light text-sm'>{user.email}</div>
						</div>
					</div>
				) : (
					<>
						<Button transparent>Log in</Button>
						<Button onClick={showRegistrationPage}>Sign up</Button>
					</>
				)}
			</div>
		</div>
	)
}
