const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['LAX', 'DBX', 'YYZ', 'NYC', 'SFO']},
    arrival: Date
}, {
    timestamps: true
})

const flightsSchema = new mongoose.Schema({
    airline: {type: String, enum: ['Air Canada', 'United', 'American', 'Southwest', 'Emirates']},
    airport: {type: String, enum: ['LAX', 'DBX', 'YYZ', 'NYC', 'SFO'], default: 'YYZ'},
    flightNo: {type: Number, min: 10, max: 9999},
    destinations: [destinationSchema],
    departs: {type: Date,
         default: () => new Date(new Date().setFullYear(new Date().getFullYear()+1))
             }
},
 {
    timestamps: true
});



// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightsSchema)