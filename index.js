const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // Database connection module
const routes = require('./routes/productRoutes'); // Route handlers module
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware for CORS, parsing JSON, and cookies
app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(cookieParser());

// Use product routes
app.use("/api/v1", routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/ProductPage',async(req,res)=>{
    res.sendFile(path.join(__dirname,'productPage.html'));

})
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'homePage.html'))
        
})