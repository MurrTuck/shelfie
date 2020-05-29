require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

app = express()
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('db connection: SUCCESSFUL')
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Hitting Dingers on port ${SERVER_PORT}`))