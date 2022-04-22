import chai from 'chai';
const expect = chai.expect;

import {
  bookings,
  customers,
  rooms
} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Hotel', () => {
  let hotel
  let newBooking
  let customer

  beforeEach(() => {
    //newBooking = new Booking(bookings[4], rooms[3])
    hotel = new Hotel(bookings, rooms, customers, 1 )
    //customer = new Customer(customers[0])
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should have the current date', () => {
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    hotel.getCurrentDate()
    expect(hotel.currentDate).to.equal(date)
  })

  // it('Should hold booking data objects', () => {
  //   expect(hotel.bookingData[0]).to.deep.equal({
  //     "id": "5fwrgu4i7k55hl6sz",
  //     "userID": 1,
  //     "date": "2022/04/22",
  //     "roomNumber": 15
  //   })
  // })
  //
  // it.skip('Should hold all roomData', () => {
  //   expect(hotel.roomData[0].costPerNight).to.equal(358.4)
  // })
  //
  // it.skip('Should hold all customerData', () => {
  //   expect(hotel.customerData[0]).to.deep.equal({
  //     "id": 1,
  //     "name": "Leatha Ullrich"
  //   })
  // })

  it('Should have a method to update allBookings into array of instances of Booking', () => {
    expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
  })

  it('Should add/hold currentCustomer ID', () => {
    expect(hotel.currentCustomer.id).to.equal(1)
  })

  it('Should have a method to instanciate allCustomers', () => {
    expect(hotel.allCustomers[0]).to.be.an.instanceOf(Customer)
  })

  it('Should have a method to instanciate allRooms', () => {
    expect(hotel.allRooms[0]).to.be.an.instanceOf(Room)
  })

  it('Should have a method to instanciate allBookings', () => {
    expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
  })

})
