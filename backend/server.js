const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); // This configures so that we can have our environment variables

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const app = express(); // This is how we create our express server
const port = process.env.PORT || 5000;


app.use(cors()); // cors middleware which allows us to parse json bcz our server will -><- json
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});