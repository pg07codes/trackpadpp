
const socket = io();

// document.onmousemove = handleMouseMove;
// function handleMouseMove(e) {
//     socket.emit('mousemove', { x: e.clientX, y: e.clientY })
// }



const trackpadArea = document.querySelector('#trackpad')
const trackpad = new ZingTouch.Region(trackpadArea)


var w = screen.width ;
var h = screen.height ;

socket.emit('deviceInfo',{w,h})


trackpad.bind(trackpadArea, 'tap', function (event) {
    socket.emit('tap')
}, false);

trackpad.bind(trackpadArea, 'pan', function (event) {
    
    let ev={}
    ev.details=event.detail.data
    ev.screenX=event.detail.events[0].screenX
    ev.screenY=event.detail.events[0].screenY
    console.log(event)
    
    socket.emit('pan',{ev})
    

}, false);

