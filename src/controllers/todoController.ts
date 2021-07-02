import Router from 'koa-router'

const router = new Router({
    prefix: '/todo',
})

router.get('todoList', '/', (ctx) => {
    ctx.response.body = {
        todoList: [],
    }
})

export default router
