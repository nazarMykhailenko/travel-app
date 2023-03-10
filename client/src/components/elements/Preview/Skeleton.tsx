import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={909}
			height={282}
			viewBox='0 0 909 282'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='8' ry='8' width='909' height='282' />
		</ContentLoader>
	)
}
