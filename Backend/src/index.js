const express = require('express');
const {PORT} = require('./config');
const connect = require('./config/db_config');
const cors = require('cors');
const ApiRoutes = require('./routes/index');
const app = express();

//For body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middlware setup for cross origin requests
app.use(cors({
    origin: "*",// Allows the requests from all the origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]// if we don't define or set these two are the default values
}));

app.use('/api',ApiRoutes);

app.listen(PORT,async () => {
    console.log('Server is running on port',PORT);
    await connect();
});