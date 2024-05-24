import Express from 'express'
import bodyParser from 'body-parser'
import petRouter from './router/petRouter.js'

const app = Express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(petRouter)

app.listen(3000,()=>{
    console.log('Running in port 3000')
})