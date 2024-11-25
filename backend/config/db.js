const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Hurray!!! MongoDB Connected.")
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;