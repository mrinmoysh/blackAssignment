const mongoose = require("mongoose");

// const uri = "mongodb+srv://tanmoy:b6sMGSRwjFkeXNW0@black.cbhyafz.mongodb.net/?retryWrites=true&w=majority"

//password- b6sMGSRwjFkeXNW0
const connectDB = (uri) => {
    // console.log("mrs")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;