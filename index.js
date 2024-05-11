require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
  res.send('twitter.com')
})

app.get('/instagram',(req, res)=>{
  res.send('<h1>hello shadab</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})