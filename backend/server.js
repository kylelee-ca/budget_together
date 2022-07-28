const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const app = express()
const port = process.env.PORT || 5000

connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hi")
})
// User routes next
app.use('/api/user', userRoutes)
// Budget List routes next

// Transactions routes next


app.listen(port, () => console.log(`listening on port ${port}`))