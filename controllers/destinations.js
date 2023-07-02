const Flight = require('../models/flight');

module.exports = {
    
    create
}

async function create(req, res){
    try{
        console.log(req.body);
    const flightDes = await Flight.findById(req.params.id)
    flightDes.destinations.push(req.body);
    await flightDes.save();
    console.log(flightDes);
    res.redirect(`/flights/${req.params.id}`)

    } catch(err){
        res.send(err)
    }
}

