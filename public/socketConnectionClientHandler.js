
const socket = io();

const trackpadArea = document.querySelector('#trackpad')
const trackpad = new ZingTouch.Region(trackpadArea)

socket.emit('clientScreenInfo', {
    clientScreenWidth: screen.width,
    clientScreenHeight: screen.height
})


function onTouchEndHandler(ev) {
    socket.emit('touchEnd')
}
trackpadArea.ontouchend = onTouchEndHandler;


trackpad.bind(trackpadArea, 'tap', function (event) {
    socket.emit('tap')
}, false);

trackpad.bind(trackpadArea, 'pan', function (event) {

    let ev = {}
    ev.details = event.detail.data
    ev.screenX = event.detail.events[0].screenX
    ev.screenY = event.detail.events[0].screenY
    console.log(event)

    socket.emit('pan', { ev })


}, false);


trackpad.bind(trackpadArea, new ZingTouch.Pan({ numInputs: 2 }), function (event) {

    let ev = {}
    ev.details = event.detail.data
    ev.screenX = event.detail.events[0].screenX
    ev.screenY = event.detail.events[0].screenY
    // console.log(event)

    socket.emit('test', { ev })


}, false);



