const mongoose = require('mongoose');
const { DB_URL } = require('./index');

const connect = async () => {
    try{
        await mongoose.connect(DB_URL);
        console.log("Database connected");
    }
    catch(err){
        console.log("Error Connecting to Database");
        process.exit(1);// To terminate the process immediately in Node
    }
}

module.exports = connect;