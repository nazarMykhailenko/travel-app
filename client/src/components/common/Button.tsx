import React from 'react'

interface IButtonProps {
	children: string
	transparent?: boolean
	dark?: boolean
	onClick?: () => void
	otherStyles?: string
}

export const Button: React.FC<IButtonProps> = ({
	children,
	transparent,
	onClick,
	otherStyles,
	dark,
}) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all ${
				transparent
					? `border-2 border-[#92B7C4] text-[#92B7C4] hover:border-[#89C5F6] hover:text-[#89C5F6]`
					: `bg-[#92B7C4] hover:bg-[#89C5F6] text-white border border-transparent`
			} ${otherStyles ? otherStyles : ``} ${
				dark ? `bg-[#46626B] hover:bg-[#6e93b0]` : ``
			}`}
		>
			{children}
		</button>
	)
}
