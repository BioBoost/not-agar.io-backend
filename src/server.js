import config from './config/config.js'
import express from 'express';

const app = express();

app.listen(config.general.port, () => {
  console.log(`Starting not-agar.io backend API on http://localhost:${config.general.port}`);
});