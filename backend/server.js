const express = require('express')

const app = express()

// Middleware to parse JSON
app.use(express.json())

// Basic route
app.get('/', (req, res) => {
    res.send("Hello World! Chat Application Server is running.")
})

app.get('/api/chat',(req,res)=>{

})

app.get('/api/chat/:id',(req,res)=>{
    
})

// Start the server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})