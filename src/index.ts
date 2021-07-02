import dotenv from 'dotenv'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import morgan from 'koa-morgan'
import todoController from './controllers/todoController'

// init .env variables
dotenv.config()

const app = new Koa()

// middleware list
app.use(morgan('dev'))
app.use(bodyParser())

// controllers
app.use(todoController.routes())

app.listen(process.env.APPLICATION_PORT, () => {
    console.log(`Application running on port: ${process.env.APPLICATION_PORT}`)
})
