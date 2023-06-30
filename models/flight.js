const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: {type: String, enum: ['Air Canada', 'American', 'Southwest', 'Emirates']},
    airport: {type: String, enum: ['LAX', 'DBX', 'YYZ', 'NYC', 'SFO']},
    flightNo: Number,
    departs: Date
}, {
    timestamps: true
})

function getAll(){
    return flightsSchema;
}

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightsSchema)