const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.static('images'))

app.get('/users/:id', function(req, res) {
  console.log(__dirname)
  res.sendFile(__dirname + `/public/${req.params.id}.html`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))