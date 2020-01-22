const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

const app = require('./app');

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});