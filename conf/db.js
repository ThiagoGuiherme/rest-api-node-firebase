// definindo os imports

const firebase = require('firebase')
const config = require('./config')

// inicializando o firebase
const db = firebase.initializeApp(config.firebaseConfig)

// exportando um modulo
module.exports = db