const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
let port = 8000
app.use(cors())
app.use(express.json())
let data = fs.readFileSync('./data.json', 'utf8')
data = JSON.parse(data)
app.get('/data', (req, res) => {
    return res.json(data)
})
app.post('/data', (req, res) => {


    const { Comment } = req.body
    let index = 0
    if (data.comments.length != 0) {
        index = data.comments.length
        console.log('hmm')
    }
    console.log(Comment)
    console.log(req.body)


    data.comments.push([Comment])
    data.comments[index].push(`id ${index}`)



    fs.writeFileSync('./data.json', JSON.stringify(data))


})
app.listen(port, () => {
    console.log(`Your sever is is running on port ${port}`)
})