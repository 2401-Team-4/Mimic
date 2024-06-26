require('dotenv').config();

PORT = process.env.PORT;
PSQL_PASSWORD = process.env.PSQL_PASSWORD;
POSTGRES_PORT = process.env.POSTGRES_PORT;
LOCATION_API_URL = 'https://api.findip.net';
LOCATION_API_TOKEN = process.env.LOCATION_API_TOKEN;
SECRET = process.env.SECRET;
REDIS_PASSWORD = process.env.REDIS_PASSWORD;
REDIS_HOST = process.env.REDIS_HOST;
REDIS_PORT = process.env.REDIS_PORT;
AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  PORT,
  POSTGRES_PORT,
  PSQL_PASSWORD,
  LOCATION_API_URL,
  LOCATION_API_TOKEN,
  REDIS_PASSWORD,
  REDIS_HOST,
  REDIS_PORT,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
  SECRET,
};
