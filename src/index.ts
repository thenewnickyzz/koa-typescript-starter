import 'reflect-metadata'
import dotenv from 'dotenv'
import morgan from 'koa-morgan'
import { createKoaServer } from 'routing-controllers'
import TodoController from './controllers/TodoController'

// init .env variables
dotenv.config()

// initialize koa server
const app = createKoaServer({
    controllers: [TodoController],
})

// middlewares
app.use(morgan('dev'))

// start the app
app.listen(process.env.APPLICATION_PORT, () => {
    console.log(`Application running on port: ${process.env.APPLICATION_PORT}`)
})
