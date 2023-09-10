import express, { Application, Request, Response } from 'express'
import routeProduct from '../routes/product'
import db from '../db/connection'

class Server {
    private app: express.Application
    private port: string
    constructor() {

        this.app = express()
        this.port = process.env.PORT || '3001'
        this.listen()
        this.middleware()
        this.routes()
        this.dbConnect()
    }    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API WORKING'
            })
        })
        this.app.use('/api/productos', routeProduct)
    }
    middleware() {
        this.app.use(express.json())
    }

    async dbConnect() {
        try {
            await db.authenticate()
            console.log('db conectada')
        } catch (e) {
            console.log(e)
            console.log('db no conectada error')
        }
    }
}

export default Server