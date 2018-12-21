const {request, authReq} = require('./utils')

function init() {
    

    document.getElementById('signForm').addEventListener('submit', function(e){
        e.preventDefault()

        const email = document.getElementById('emailSign').value
        const fname = document.getElementById('fname').value
        const lname = document.getElementById('lname').value
        const pw1 = document.getElementById('pw').value
        const pw2 = document.getElementById('verifypw').value

        if(pw1 !== pw2){
            alert('Passwords Must Match!')
        }
        else if (pw1.length < length) {
            alert('Password Length Must Exceed 7 Characters')
        }
        else{
            const password = pw1
            request('/users', 'post', {email, password, fname, lname})
            .then(() => {
               return authReq('/auth', 'post', {email, password})
            })
            .then(result =>{
                if(result.status === 200)
                window.localStorage.setItem('token', result.data.token)
                window.location = './home.html'
            })
            .catch((err) => {
                alert('Something Went Wrong')
                location.reload()
            })
        } 
    })
    
    document.getElementById('pw').addEventListener('input', verifyPass)
    document.getElementById('verifypw').addEventListener('input', verifyPass)

}

function verifyPass() {
    //grab the inputs, if they match then grab the checkmarks and turn them green
    const pw1 = document.getElementById('pw').value
    const pw2 = document.getElementById('verifypw').value
    const [...checkmarks] = document.querySelectorAll('.fa-check')

    if(pw1 === pw2 && pw1 !== '' && pw1.length >= 8){
        checkmarks.forEach(element => {
            element.setAttribute("style", "color:green;");
        })
    }
    else {
        checkmarks.forEach(element => {
            element.setAttribute("style", "color:#DADADA;");
        })
    }   
}

module.exports = {init}