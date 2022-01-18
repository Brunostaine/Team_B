import { Router } from "express";
import userRoutes from './users'
import tokenRoutes from './token'

const routes = Router()

routes.get('/', (req, res, next) => {
  res.status(200).send('Hello Dev, Server working properly.')
})

routes.use('/users', userRoutes)
routes.use('/token', tokenRoutes)

export default routes