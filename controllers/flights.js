const Flight = require('../models/flight')

module.exports = {
    index,
    newFlight,
    show,
    create
}

//  async function create(req, res) {
//     Flight.create(req.body)
//     res.redirect('flights/index')
// }

async function show(req, res){
    const flight = await Flight.findById(req.params.id);
    console.log(flight);
    //render the page by inputting the PATH and telling the page what to display by putting the variable after it 
    res.render('flights/show', {flight})
    
}

async function create(req, res) {
  
    await Flight.create(req.body);
  
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

