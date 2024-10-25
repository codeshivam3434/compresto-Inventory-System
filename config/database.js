const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Use backticks for template literal
    } catch (error) {
        console.error(`Error: ${error.message}`); // Use backticks for template literal
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
