import express from 'express'
import Routes from './routes'

const port = 3333
const app = express()

app.use(express.json())
app.use(Routes)

app.listen(port, () => {
  console.log('Hello World! 💻🖥🚀')
})