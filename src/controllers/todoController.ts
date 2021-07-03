import { BodyParam, Get, JsonController, Post } from 'routing-controllers'

@JsonController('/todo')
class TodoController {
    @Get('/')
    getAll() {
        return {
            todos: [],
        }
    }

    @Post('/')
    create(@BodyParam('todo') todo: string) {
        return {
            message: `New todo added: ${todo}`,
        }
    }
}

export default TodoController
