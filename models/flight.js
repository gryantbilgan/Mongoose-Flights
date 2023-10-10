const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Alaska', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['PDX', 'LAX', 'ORD', 'GRU', 'PAP'],
        default: 'PDX',
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        required: true,
        default: function() {
            return new Date(new Date() + 7*24*60*60*1000)
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);