import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Room from '../src/classes/Room.js';
import Hotel from '../src/classes/Hotel.js';


describe('Booking', () => {
  let booking
  let hotel

  beforeEach(() => {
  hotel = new Hotel(bookings, rooms, customers, 1)
  booking = hotel.allBookings[4]
  })

  it.skip('Should be a function', () => {
    expect(Booking).to.be.a('function');
  })

  it.skip('Should be an instance of booking', () => {
    expect(booking).to.be.instanceOf(Booking)
    });

  it.skip('Should hold Booking data', () => {
    expect(booking.id).to.equal("5fwrgu4i7k55hl6t8")
    expect(booking.userID).to.equal(1)
    expect(booking.date).to.equal("2022/02/05")
  })

  it.skip('Should hold room data', () => {
    expect(booking.room).to.deep.equal(rooms[3])
  })


  it.skip("Should have a method to return booking cost", () => {
    expect(booking.getCost()).to.equal(172.09)
  })

  it.skip("Should have a method to return date", () => {
    expect(booking.getDate()).to.equal("2022/02/05")
  })

})
