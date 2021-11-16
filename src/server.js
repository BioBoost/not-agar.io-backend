import config from './config/config.js'
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import axios from 'axios';
import { validate } from 'jsonschema';
import { MoveSchemas } from './validation/move.js';
import http from 'http';

// TODO - Register player (get secret key for actions later on)

const app = express();
const httpServer = http.createServer(app);

app.use(cors({
  origin: `http://localhost:${config.frontend.port}`,
}));
app.use(express.json({limit: '1mb'}));    // Allow bigger body payloads

const io = new Server(httpServer, {
  cors: {
    origin: `http://localhost:${config.frontend.port}`,
    methods: ["GET", "POST"]
  }
});

io.on('connection', function (socket) {
  console.log('Phaser frontend connected');

  socket.on('disconnect', function () {
    console.log('Phaser frontend disconnected');
  });
});

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to not-agar.io backend API',
    version: process.env.npm_package_version
  })
});

app.post('/display', (req, res) => {
  if (!config.display.enabled) {
    return res.send({
      message: 'Image received but display is not enabled'
    });
  }

  let buffer = Buffer.from(req.body.data, 'base64');    // Convert base64 data into raw png again
  axios.post(`${config.display.host}`, buffer)
  .then(function () {
    res.send({
      message: 'Image successfully send to display'
    });
  })
  .catch(function (error) {
    res.status(500).send({
      message: 'Failed to send image to display',
      error: error
    })
  });
});

app.post('/move/:player', (req, res) => {
  // TODO - Setup error handler for this
  const validation = validate(req.body, MoveSchemas.action);
  if (!validation.valid) {
    return res.status(400).send({
      message: 'Invalid move requested',
      errors: validation.errors.map(e => e.stack)
    });
  }

  // TODO - Actually send move towards Phaser via websocket

  res.send({
    message: `Successfully requested move of player`
  });
});

httpServer.listen(config.general.port, () => {
  console.log(`Starting not-agar.io backend API on http://localhost:${config.general.port}`);
});