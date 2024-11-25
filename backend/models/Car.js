const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    mileage: { type: Number },
    condition: { type: String, enum: ['new', 'used'], default: 'used' },
    pictures: [String],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createAt: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Car', carSchema);