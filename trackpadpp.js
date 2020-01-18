const http = require('http')
const express = require('express')
const robotjs = require('robotjs')
var app = express()

var server = http.createServer(app)

var io = require('socket.io').listen(server)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (r, s) => {
	s.sendFile('index.html', { root: __dirname })
})

io.on('connection', (socket) => {
	console.log(socket.id)
	socket.on("mousemove", (data) => {
		console.log(JSON.stringify(data))
		robotjs.moveMouse(data.x,data.y)
	})
});

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
	console.log(`Server Started at http://localhost:${PORT}`)
})

