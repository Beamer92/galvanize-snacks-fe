(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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




},{"./src/home.js":2,"./src/index.js":3,"./src/signup.js":4}],2:[function(require,module,exports){
 function init() {

 }

 module.exports = {init}
},{}],3:[function(require,module,exports){
function init() {
    console.log('Hello!')









}

module.exports = {init}
},{}],4:[function(require,module,exports){
function init() {
    console.log('SignUp Here')


}

function verifyPass(checkmark1, checkmark2) {
    
}

module.exports = {init}
},{}]},{},[1]);
