const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    addTicket,
    create
}

async function addTicket(req, res) {
    // find flight by id and assign to variable called flight
    const flight = await Flight.findById(req.params.id);
    // render new ticket template
    // pass the flight
    res.render('tickets/new', { flight });
}

async function create(req, res) {
    req.body.flight = req.params.id;
    try {
        await Ticket.create(req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.log(err);
    }
} 