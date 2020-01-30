const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
  path: './config.env'
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to db');
  })
  .catch(() => {
    console.log('Connection failed');
  });

const app = require('./app');

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
