const mongoose = require('mongoose');


const  connectToDb = async ()=> {
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
    console.log("Connected to Database...");
    }catch(err){
        console.log("Error connecting to database!", err);
        process.exit(1);
    }
}

module.exports =  connectToDb;