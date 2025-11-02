import dotenv from 'dotenv';
dotenv.config ({quiet: true});

export const ENV = {
  PORT: process.env.PORT,
  DB: process.env.DB,
  NODE_ENV: process.env.NODE_ENV,
  INNGST_EVENT_KEY: process.env.INNGST_EVENT_KEY,
  INNGST_SIGNING_KEY: process.env.INNGST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  CLIENT_URL : process.env.CLIENT_URL
};
