const axios = require('axios')

const environment = window.location.hostname === '127.0.0.1' ? 'http://localhost:3000' : 'https://something.herokuapp.com'

function authReq(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }

  return axios(`${environment}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
}

function request(path, method = 'get', body = null) {
 
  return axios(`${environment}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: body
  })}

module.exports = { request, authReq, environment }