
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
            robot.mouseClick();
        })

        let oldX = -1
        let oldY = -1
        let newX = -1
        let newY = -1

        socket.on("pan", (data) => {

            // console.log('pan info', data)
            if (newX === -1) {

                oldX = parseFloat(data.ev.screenX.toFixed(2))
                oldY = parseFloat(data.ev.screenY.toFixed(2))
                newX = parseFloat(data.ev.screenX.toFixed(2))
                newY = parseFloat(data.ev.screenY.toFixed(2))

            } else {



                oldX = newX
                oldY = newY
                newX = parseFloat(data.ev.screenX.toFixed(2))
                newY = parseFloat(data.ev.screenY.toFixed(2))

                console.log('oldtap', oldX, oldY)
                console.log('newtap', newX, newY)

                const scalingFactorX = screenSize.width / clientWidth
                const scalingFactorY = screenSize.height / clientHeight


                diffAlongX = parseFloat(((newX - oldX) * scalingFactorX).toFixed(2))
                diffAlongY = parseFloat(((newY - oldY) * scalingFactorY).toFixed(2))


                let origx = robot.getMousePos().x
                let origy = robot.getMousePos().y

                console.log('origPosMouse', origx, origy)
                console.log('newPosMouse', origx + diffAlongX, origy + diffAlongY)
                console.log('----')

                robot.moveMouse(origx + diffAlongX, origy + diffAlongY)

                // oldX = -1
                // oldY = -1
                // newX = -1
                // newY = -1

            }



        })

        socket.on('x', () => {
            oldX = -1
            oldY = -1
            newX = -1
            newY = -1
        })

    })

}


module.exports = { socketConnectionHandler }


