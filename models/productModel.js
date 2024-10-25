const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    index: true // Indexing for faster search
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true, 
    index: true // Indexing for category filtering
  },
  suppliers: [{ 
    type: mongoose.Schema.Types.ObjectId, // Reference to Supplier schema
    ref: 'Supplier', // Referencing the Supplier model
    required: true 
  }],
  price: { 
    type: Number, 
    required: true 
  },
  stockQuantity: { 
    type: Number, 
    min:0
  },
  reorderLevel: { 
    type: Number,
    min:0
  },
  location: { 
    type: String, 
    required: true 
  },
  inventoryStatus: { 
    type: String, 
    enum: ['Low', 'Medium', 'High'], 
    default: 'Medium',
    index: true // Indexing for status filtering
  },
  specifications: { 
    type: Map, 
    of: String // Store specifications as a key-value pair, including dimensions
  },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    index: true // Index for sorting by creation date
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Compound index for faster filtering by name and category
productSchema.index({ name: 1, category: 1 });

// Index for low stock level to prioritize restocking queries
productSchema.index({ stockQuantity: 1 });


module.exports = mongoose.model('Product', productSchema);
