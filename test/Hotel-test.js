import chai from 'chai';
const expect = chai.expect;
let moment = require('moment')
import { bookings, customers, rooms } from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';
import Room from '../src/classes/Room.js';

describe('Hotel', () => {
  let hotel

  beforeEach(() => {
    hotel = new Hotel(bookings, rooms, customers, 1 )
  })

  it.skip('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it.skip('Should have the current date', () => {
    let date = moment().format('YYYY/MM/DD')
    hotel.getCurrentDate()
    expect(hotel.currentDate).to.equal(date)
  })

  it.skip('Should add/hold currentCustomer ID', () => {
    expect(hotel.currentCustomer.id).to.equal(1)
  })

  it.skip('Should have a method to instanciate allCustomers', () => {
    expect(hotel.allCustomers[0]).to.be.an.instanceOf(Customer)
  })

  it.skip('Should have a method to instanciate allRooms', () => {
    expect(hotel.allRooms[0]).to.be.an.instanceOf(Room)
  })

  it.skip('Should have a method to instanciate allBookings', () => {
    expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
  })

})
