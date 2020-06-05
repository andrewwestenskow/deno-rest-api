import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const SERVER_PORT = 4545

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server running on port ${SERVER_PORT}`)

await app.listen({ port: SERVER_PORT })
