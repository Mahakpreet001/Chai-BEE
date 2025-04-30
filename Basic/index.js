require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req, res) => {
    res.send("This is about page!!")
})

app.get('/github',(req,res) => {
    res.send("www.github.com")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
