import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Hotel', () => {
  let hotel
  let newBooking
  let customer
  beforeEach(() => {
    newBooking = new Booking(bookings[4], rooms[3])
    hotel = new Hotel(bookings, rooms, customers, customers[0])
    customer = new Customer(customers[0])
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should have the current date', () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date, 'test-date')
    hotel.getCurrentDate()
    expect(hotel.currentDate).to.equal(date)
  })

  it('Should hold booking data objects', () => {
    expect(hotel.bookingData[0]).to.deep.equal({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2022/04/22",
      "roomNumber": 15
    })
  })

  it('Should hold all roomData', () => {
    expect(hotel.roomData[0]).to.deep.equal({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    })
  })

    it('Should hold all customerData', () => {
      expect(hotel.customerData[0]).to.deep.equal({
        "id": 1,
        "name": "Leatha Ullrich"
      })
    })

    it.skip('Should have a method to update allBookings into array of instances of Booking', () => {
      expect(hotel.allBookings[0]).to.be.an('object')
      hotel.updateAllBookings()
      expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
    })

    it.skip('Should hold currentBookings', () => {
      expect(hotel.currentUserBookings).to.be.a('array')
      expect(hotel.currentUserBookings[0]).to.be.a('object')
    })

    it.skip('Should have a method to filter/hold currentUserBookings', () => {
      expect(hotel.currentCustomerBookings[0]).to.deep.equal()
    })
    it.skip('Should have a method to fill the current customers booking array with Bookings', () => {
      hotel.updateCustomerBookings()
      expect(hotel.currentCustomerBookings[0]).to.deep.equal()
    })

    it.skip('Should have a method to make a currentCustomer', () => {
      hotel.updateCurrentCustomer(1,)
      expect(this.currentCustomer).to.be.an.instanceOf(Customer)
    })

    it.skip('Should hold a currentUser class', () => {
      expect(hotel.currentCustomer).to.be.an.instanceOf(Customer)
    })

    it.skip('Should have a method to create a new Booking class', () => {
      expect(hotel.makeBooking(bookings[4], rooms[3])).to.be.an.instanceOf(Booking)
    })

    it.skip('Should have a method to update allBookings', () => {
      hotel.updateAllBookings()
      expect(hotel.allBookings[3]).to.be.an.instanceOf(Booking)
    })
  })
