const express = require('express')
const cors = require('cors')
const { chats } = require('./data/data')

const app = express()

// CORS middleware - Allow all origins in development
app.use(cors({
    origin: true, // Allow all origins
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

// Middleware to parse JSON
app.use(express.json())

// Basic route
app.get('/', (req, res) => {
    res.send("Hello World! Chat Application Server is running.")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
})

// Start the server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})