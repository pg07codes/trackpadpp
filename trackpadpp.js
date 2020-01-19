const http = require('http')
const express = require('express')
const { socketConnectionHandler } = require('./socketConnectionHandler')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

socketConnectionHandler(io)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/public",express.static( __dirname+'/public'))

app.get('/', (r, s) => {
	s.sendFile('index.html', { root: __dirname })
})


const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
	console.log(`Server Started on PORT :${PORT}`)
})

