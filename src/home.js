const templates = require('./templates')
const {request} = require('./utils')

function getSnacks() {
  request('/snacks')
  .then(results => {
    let snacks = results.data
    generateCards(snacks)
  })
}

function generateCards(snacks) {
  const appliedTempaltes = snacks.map(snack => templates.popCards(snack)).join('/n')
  console.log(snacks)
  //Do column stuff here
  // document.querySelector(".main-body").innerHTML = appliedTemplates;
}

function init() {
  getSnacks()


 }

 module.exports = {init}