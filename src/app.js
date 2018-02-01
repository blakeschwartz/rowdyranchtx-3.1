/*
  app.js

  (C) 2016-2018 Blake Schwartz
 */

import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import path from 'path'
import morgan from 'morgan'
import winston from 'winston'

import APIRouter from './server/router/APIRouter'
import ImageRouter from './server/router/ImageRouter'


let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'server.log' })
  ]
})

logger.info(`Starting server on directory: ${__dirname}.`)

let app = express()

app.use(cookieParser())

app.use(session({
  secret: 'ssshhhhh',
  resave: true,
  saveUninitialized: true
  })
)

app.use(express.static('public'))

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.set('views', path.join(__dirname, '/../views'))
app.set('view engine', 'pug')

let env = {}
env.mode = process.env.NODE_ENV || 'production'

if (env.mode == 'development') {
  env.port = 8080
}
else {
  // production
  env.port = 80
}

logger.info(`Server is in ${env.mode} mode.`)
logger.info(`Server is assigned port ${env.port}.`)

app.use('/api', new APIRouter({logger: logger}).routes())
app.use('/img', new ImageRouter({logger: logger}).routes())


app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message)
    res.status(500).send(err)
  }
})

app.listen(env.port, () => {
  logger.info("Server is listening...")
})
