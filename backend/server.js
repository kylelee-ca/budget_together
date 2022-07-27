const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const app = express()
const port = process.env.PORT || 5000

connectDB()

app.get('/', (req, res) => {
    res.send("Hi")
})
// User routes next

// Budget List routes next

// Transactions routes next


app.listen(port, () => console.log(`listening on port ${port}`))