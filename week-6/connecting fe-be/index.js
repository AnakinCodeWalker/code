import express, { urlencoded } from 'express'
import cors from 'cors'
import db from './utils/db.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use(urlencoded({
    extended: true
}
))
db()
app.get('/', (req, res) => {
    res.send({
        "message": "connecting frontend to backend"
    })
})

app.listen(3000 || 8080, () => {
    console.table(`server started`);
})

