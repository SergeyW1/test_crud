const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const postRouter = require('./routes/postRoutes')

const app = express();

const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/posts', postRouter)

app.get('/', (req: any, res: any): void => {
    res.json('Welcome')
});

const PORT = process.env.PORT || 8080
app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`)
})