'use strict';

const events = require('../events');

events.on('driverPickup', payload => {
  setTimeout(() => {
    console.log(`DRIVER:${payload.orderID}`);
    events.emit('transit', payload);
  }, 1000);
});


events.on('drivertransit', payload => {
  setTimeout(() => {
    console.log(`DRIVER: ${payload.orderID}`);
    events.emit('driverDileverd', payload);
  }, 3000);
});

module.exports = events;
