const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addTicket,
    create
}

async function addTicket(req, res) {
    try {
        // find flight by id and assign to variable called flight
        const flight = await Flight.findById(req.params.id);
        // render new ticket template
        // pass the flight
        res.render('tickets/new', { flight });
    } catch(err) {
        console.log(err);
    }
}

async function create(req, res) {
    const ticketInfo = req.body;
    const flightId = req.params.id;
    console.log('before', ticketInfo);
    ticketInfo.flight = flilghtId;
    console.log('after', ticketInfo);
    req.body.flight = req.params.id;
    try {
        await Ticket.create(ticketInfo)
        res.redirect(`/flights/${flightId}`)
    } catch(err) {
        console.log(err);
    }
} 