const index = require('./src/index.js')
const home = require('./src/home.js')
const signup = require('./src/signup.js')


const pageInitialization = {
  '/' : index.init,
  '/index.html': index.init,
  '/home.html' : home.init,
  '/signup.html' : signup.init
}

const path = window.location.pathname
 
if(pageInitialization.hasOwnProperty(path)) {
  pageInitialization[path]()
}
else {
  console.error(`${path} does not have an initializer`)
}



