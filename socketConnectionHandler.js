
const robot = require('robotjs')

var screenSize = robot.getScreenSize();

// console.log('height',screenSize.height)
// console.log('width',screenSize.width)

function socketConnectionHandler(io) {

    io.on('connection', (socket) => {
        console.log("connection made with", socket.id)

        let clientWidth = -1, clientHeight = -1
        socket.on('deviceInfo', (dev) => {
            clientWidth = dev.w
            clientHeight = dev.h
            console.log('Clients Device Details', dev.h, 'X', dev.w)
        })

        socket.on("tap", () => {
            // robot.mouseClick();
        })

        let oldX = -1
        let oldY = -1
        let newX = -1
        let newY = -1

        socket.on("pan", (data) => {

            console.log('pan info', data)
            if (newX == -1) {

                oldX = data.ev.screenX
                oldY = data.ev.screenY
                newX = data.ev.screenX
                newY = data.ev.screenY

            } else {
                oldX = newX
                oldY = newY
                newX = data.ev.screenX
                newY = data.ev.screenY

                console.log("->", oldX, newY)

                const scalingFactorX = screenSize.width / clientWidth
                const scalingFactorY = screenSize.height / clientHeight



                diffAlongX = ((newX - oldX) * scalingFactorX).toFixed(2)
                diffAlongY = ((newY - oldY) * scalingFactorY ).toFixed(2)


                let origx = robot.getMousePos().x
                let origy = robot.getMousePos().y
                
                robot.moveMouse(origx+parseFloat(diffAlongX),origy+parseFloat(diffAlongY))

            }



        })

    })

}


module.exports = { socketConnectionHandler }


