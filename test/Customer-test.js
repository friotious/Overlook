import chai from 'chai';
const expect = chai.expect;

import { bookings, rooms, customers} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';
var dayjs = require('dayjs')
describe('Customer', () => {
  let hotel
  let customer

  beforeEach(() => {
    hotel = new Hotel(bookings, rooms, customers, 1)
    customer = hotel.currentCustomer
  })

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should hold current date', () => {
    expect(customer.currentDate).to.equal(hotel.getCurrentDate())
  })

  it('Should hold customer data', () => {
    expect(customer.id).to.equal(1)
    expect(customer.name).to.equal("Leatha Ullrich")
  })

  it('Should be able to hold its bookings', () => {
    expect(customer.allBookings[0]).to.be.a.instanceOf(Booking)
    let sameID = customer.allBookings.map(booking => booking.userID)
    expect(sameID.every(id => id === 1))
  })

  it('Should store totalSpent on all rooms', () => {
    customer.calculateTotalSpent()
    expect(customer.totalSpent).to.equal(638.74)
  })

  it('Should filter past/present/future bookings', () => {
    customer.sortBookings()
    expect(customer.pastBookings[0].id).to.equal("5fwrgu4i7k55hl6sz")
    expect(customer.futureBookings[0].id).to.equal('5fwrgu4i7k55hl6t5')
  })

  it('Should have methods to return all Bookings', () => {
    customer.sortBookings()
    expect(customer.getPastBookings()[0].id).to.equal("5fwrgu4i7k55hl6sz")
    expect(customer.getFutureBookings()[0].id).to.equal('5fwrgu4i7k55hl6t5')
  })

})
