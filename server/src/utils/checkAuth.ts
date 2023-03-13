// import jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from 'express'

// interface IRequest extends Request {
// 	userId?: string | number
// }

// export default (req: IRequest, res: Response, next: NextFunction) => {
// 	const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

// 	if (token) {
// 		try {
// 			const decoded = jwt.verify(token, 'secret123')

// 			req.userId = decoded._id as string | number
// 			next()
// 		} catch (e) {
// 			return res.status(403).json({
// 				message: 'Нет доступа',
// 			})
// 		}
// 	} else {
// 		return res.status(403).json({
// 			message: 'Нет доступа',
// 		})
// 	}
// }
