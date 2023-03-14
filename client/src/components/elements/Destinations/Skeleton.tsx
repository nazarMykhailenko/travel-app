import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={280}
			viewBox='0 0 280 280'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='12' ry='12' width='280' height='280' />
		</ContentLoader>
	)
}
