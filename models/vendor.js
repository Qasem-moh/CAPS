'use strict';

require('dotenv').config();

const faker = require('faker');
const events = require('../events');

//storeName, orderId, customerName, address

setInterval(() => {
    setTimeout(() => {
        let customerOrder = {
            storeName: process.env.STORENAME || 'qasem',
            orderID: faker.datatype.uuid(),             //faker is a library,dataType is class, uuid is a function
            customerName: faker.name.findName(),        //faker is a library,name is class, findName is a function
            address: faker.address.streetAddress()      //faker is a library,address is class, streetAddress is a function
        }
        events.emit('pickup', customerOrder) /// for create actions

    }, 5000);
}, 5000);

events.on('vendorDileverd', payload => { // running 
    console.log(`thank you for delevering ${payload.orderID}`);
    events.emit('deleverd', payload)
})

module.exports = events;    //pickup=>>>>>>>>customerOrder
