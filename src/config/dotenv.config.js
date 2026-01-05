import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  frontend_domain: process.env.FRONTEND_DOMAIN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
  node_env: process.env.NODE_ENV,
};

export const env = Object.freeze(_config);
