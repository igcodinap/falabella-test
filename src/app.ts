import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import { router } from './routes'


// configure ts express server
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

// configure routes
app.use('/', router)

// catch 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' })
});

// start express server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})


export default app
