const mongoose = require('mongoose');  

const supplierSchema = new mongoose.Schema({  
    name: {  
        type: String,  
        required: true // corrected here  
    },  
    contact: {  
        type: String,  
        required: true // corrected here  
    },  
    address: {  
        type: String // corrected here  
    },  
    email: {  
        type: String // added missing comma here  
    }  
}, {  
    timestamps: true   
});  

module.exports = mongoose.model('Supplier', supplierSchema);