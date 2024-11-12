const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Hurray!!! MongoDB Connected.")
    } catch (error) {
        console.log(err.message);
        process.exit(1);
    }
}