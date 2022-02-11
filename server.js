const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//mongodb connection---IF MONGODB_URI exists when we deploy on Heroku, use it. If NOT short-circuit to the local MongoDB server's database at mongodb://localhost:27017/pizza-hunt
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  // useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Use this to log mongo queries being executed!
mongoose.set('debug', true);

//connection for express 
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
