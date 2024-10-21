const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then((con) => console.log('Connection successfull'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App stated at port ${port}`);
});

module.exports = app;
