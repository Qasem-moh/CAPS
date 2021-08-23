'use strict';

const events = require('../events');
const supertest = require('supertest');


let payload = {
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};

jest.useFakeTimers();

describe('caps test', () => {

  it('pickup', () => {
    const caps = require('../models/caps');
    caps.emit('pickup', payload);
    expect(caps.emit('pickup', payload)).toEqual(true);
  });

  it('transit', () => {
    const caps = require('../models/caps');
    caps.emit('transit', payload);
    expect(caps.emit('transit', payload)).toEqual(true);
  });

  it('transit', () => {
    const caps = require('../models/caps');
    caps.emit('dileverd', payload);
    expect(caps.emit('dileverd', payload)).toEqual(true);
  });

});

//##############################################################################################
describe('driver test', () => {

  it('transit', () => {
    const driver = require('../models/driver');
    driver.emit('transit', payload);
    expect(driver.emit('transit', payload)).toEqual(true);
  });

  it('transit', () => {
    const driver = require('../models/driver');
    driver.emit('drivertransit', payload);
    expect(driver.emit('drivertransit', payload)).toEqual(true);
  });

});

//#####################################################################

describe('driver test', () => {
  it('transit', () => {
    const vendor = require('../models/vendor');
    vendor.emit('vendorDileverd', payload);
    expect(vendor.emit('vendorDileverd', payload)).toEqual(true);
  });

});