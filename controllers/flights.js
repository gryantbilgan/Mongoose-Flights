const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: 'Flight Cancelled' });
}

async function create(req, res) {
    console.log(req.body);
    try {
        await Flight.create(req.body);
        res.redirect('/flights')
    } catch (err) {
        console.log(err);
    }
}

function index(req, res) {
    Flight.find({})
    .then( (flights) => {
        // Sort through flights by departure date in descending order
        const sortedFlights = flights.sort((a,b) => {
            return new Date(a.departs) - new Date(b.departs);
        });
        res.render('flights/index', { sortedFlights })
    })
    .catch((err) => {
        console.log(err);
    })
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    const now = new Date;
    const formattedDate = now.toISOString().slice(0,16);
    res.render('flights/show', { title: 'Flight Details', flight, tickets, formattedDate });
}