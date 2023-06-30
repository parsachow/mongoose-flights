const Flight = require('../models/flight')
module.exports = {
    index,
    newFlight,
    create
}

//  async function create(req, res) {
//     Flight.create(req.body)
//     res.redirect('flights/index')
// }

async function create(req, res) {
    
    req.body.airline = req.body.airline
   
    req.body.airport = req.body.airport
    
    req.body.flightNo = req.body.flightNo

    req.body.departs = req.body.departs

    const flightfromDB = await Flight.create(req.body);
  
    res.redirect('flights/new');

  
}

function newFlight(req, res){
    res.render('flights/new')
}

async function index(req, res){
    const flights = await Flight.find({})
    console.log(flights)
    res.render('flights/index', { flights })
}