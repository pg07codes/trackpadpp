# trackpadpp    

> control a device's cursor (Desktop, laptop) using a mobile or tablet touchscreen as a trackpad.

Could be useful if you want to - 
- Use it if your laptop trackpad is not working correctly.
- Use it if you want to control your laptop,desktop wirelessly from a distance.

## gif (demonstrating simple usage)

![](https://github.com/pg07codes/trackpadpp/blob/master/.github/usage.gif)


## setup and running
- It has not been packaged yet so cloning is the fastest way to set it up and use.
- `clone this repo`
- run `npm install` to install all the dependencies.
- use `node trackpadpp.js` to spin up a local connection server
- Open `<private-ip-address>:8080` (eg. `192.168.0.105:8080`) using the device you want to use as a controller and there you go.
  
  
## how it works ?

It spins up a local server on your device (whose cursor will be controlled) and allows another device(controller) to control the cursor using two-way socket connections and uses robotjs library for the cursor OS bindings.


<p align="center">⭐⭐⭐⭐⭐</p>
<h2 align="center">
  Open Source
</h2>
<p align="center">
  <sub>Copyright © 2020-present, Pranav Gupta</sub>
</p>
<p align="center">Trackpadpp is <a href="https://github.com/pg07codes/trackpadpp/blob/master/license.md">MIT</a> licensed 💖</p>
