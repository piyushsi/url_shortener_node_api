// Require express module
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


//Start server on Port 3001
app.listen(PORT, () => {
 console.log(`Server started on port`, PORT);
});


const mongoURI = "mongodb+srv://url:f5FKzpz6bYfcWhS@conduit.acuxw.mongodb.net/url?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
};
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) console.log(`Error`, er);
  console.log(`Connected to MongoDB`);
});

app.use(express.json())


require('./models/UrlShortner')
require("./routes/urlshorten")(app);

