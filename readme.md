# trackpadpp    

It allows user to control a devices cursor (Desktop, laptop) using a mobile or tablet as a trackpad.

- Use it if your laptop trackpad is not working correctly.
- Might use it if you want to control your laptop,desktop wirelessly from a distance.


## setup and running
- It has not been packaged yet so cloning is the fastest way to set it up and use.
- `clone this repo`
- run `npm install` to install all the dependencies.
- use `node trackpadpp.js` to spin up a local connection server
- Open `<private-ip-address>:8080` (eg. `192.168.0.105:8080`) using the device you want to use as a controller and there you go.
  
  
## how it works ?

It spins up a local server on your device (whose cursor will be controlled) and allows another device(controller) to control the cursor using two-way socket connections.

### built and maintained by @pg07codes
