const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Location.hasMany(Trips);
Traveller.hasMany(Trips);

module.exports = {
    Location,
    Traveller,
    Trips,
}