import dotenv from 'dotenv';
dotenv.config();

const config = {
  general: {
    port: process.env.PORT || 3000,
  },
  frontend: {
    port: process.env.FRONTEND_PORT || 8080
  },
  display: {
    enabled: process.env.ENABLE_DISPLAY || false,
    host: process.env.DISPLAY_HOST || 'http://10.0.0.99:3000'
  }
}

export default config;