import config from './config/config.js'
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to not-agar.io backend API',
    version: process.env.npm_package_version
  })
})

app.listen(config.general.port, () => {
  console.log(`Starting not-agar.io backend API on http://localhost:${config.general.port}`);
});