'use strict';

const events = require('../events');
require('./driver');
require('./vendor');

let date = new Date();
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
let time = date.toLocaleTimeString();

//Pickup
events.on('pickup', payload => {
  console.log('EVENT:', {
    event: 'pickup',
    time: `${year}-${month}-${day} T ${time}`,
    payload: payload,
  });
  events.emit('driverPickup', payload);
});
//transit
events.on('transit', payload => {
  console.log('EVENT:', {
    event: 'transit',
    time: `${year}-${month}-${day} T ${time}`,
    payload: payload,

  });
  events.emit('drivertransit', payload);
});
//Dileverd
events.on('dileverd', payload => {
  console.log('event:', {
    event: 'Dileverd',
    time: `${year}-${month}-${day} T ${time}`,
    payload: payload,
  });

  events.emit('driverDileverd', payload);
});

module.exports = events;




