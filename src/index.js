const {authReq} = require('./utils')

function init() {

    document.getElementById('userLogin').addEventListener('submit', function(e){
        e.preventDefault()

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        authReq('/auth', 'post', {email, password})
        .then(result =>{
            if(result.status === 200)
            window.localStorage.setItem('token', result.data.token)
            window.location = './home.html'
        })
        .catch((err) => {
            alert(err)
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
        });
    })


    document.getElementById('forgotPW').addEventListener('click', function(e){
        alert('That\'s tough fam')
    })


    document.getElementById('needHelp').addEventListener('click', function(e){
        alert('God helps those who help themselves')
    })



}

module.exports = {init}