// definindo o strict mode do js
'use strict'

// definindo as importacoes
const dotenv = require('dotenv')
const assert = require('assert')

// inicializando o dot env 
dotenv.config()

// criando um objeto que ira conter as variaveis de ambiente
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

// definindo a obrigatoriedade de alguns parametros
assert(PORT, 'PORT required!')
assert(HOST, 'HOST is required!')

//exportando o modulo
module.exports = {
    port : PORT, 
    host : HOST,
    url : HOST_URL,
    firebaseConfig : {
        apiKey : API_KEY,
        authDomain : AUTH_DOMAIN,
        projectId : PROJECT_ID,
        storageBucket : STORAGE_BUCKET,
        messagingSenderId : MESSAGING_SENDER_ID,
        appId : APP_ID
    }
}