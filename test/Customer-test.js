import chai from 'chai';
const expect = chai.expect;

import { bookings, rooms, customers} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Customer', () => {
  let hotel
  let customer

  beforeEach(() => {
    hotel = new Hotel(bookings, rooms, customers, customers[0])
    customer = hotel.currentCustomer
  })

  it.skip('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it.skip('Should hold customer data', () => {
    expect(customer.id).to.equal(1)
    expect(customer.name).to.equal("Leatha Ullrich")
  })

  it.skip('Should be able to hold its bookings', () => {
    expect(customer.bookings[0]).to.be.a.instanceOf(Booking)
    let sameID = customer.bookings.map(booking => booking.userID)
    expect(sameID.every(id => id === 1))
  })

  it.skip('Should store totalSpent on all rooms', () => {
    calculateTotalSpent()
    expect(customer.totalSpent).to.equal()
  })

  it.skip('Should filter past/present/future bookings', () => {
    customer.sortBookings()
    expect(customer.pastBookings[0].id).to.equal("5fwrgu4i7k55hl6t8")
    expect(customer.presentBooking[0].id).to.equal()
    expect(customer.futureBookings[0].id).to.equal()
  })

  it.skip('Should have methods to return all Bookings', () => {
    expect(customer.getPastBookings()[0].id).to.equal("5fwrgu4i7k55hl6t8")
    expect(customer.getPresentBooking()[0].id).to.equal("")
    expect(customer.getFutureBookings()[0].id).to.equal("")
  })


})
