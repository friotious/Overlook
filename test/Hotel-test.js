import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Hotel', () => {
  let hotel
  let booking
  let customer
  beforeEach(() => {
    booking = new Booking(bookings, rooms)
    hotel = new Hotel(bookings, rooms, customers)
    customer = new Customer(customers[0])
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should hold booking data objects', () => {
    expect(this.allBookings[0]).to.deep.equal({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2022/04/22",
      "roomNumber": 15
    })
  })

  it('Should hold all roomData', () => {
    expect(this.allRooms[0]).to.deep.equal({
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    })

    it('Should hold all customerData', () => {
      expect(this.allCustomers[0]).to.equal({
        "id": 1,
        "name": "Leatha Ullrich"
      })
    })

    it('Should hold a currentUser class', () => {
      expect(this.currentUser).to.be.an.instanceOf(Customer)
    })

    it('Should hold currentBookings', () => {
      expect(this.currentBookings).to.be.a('array')
    })
  })

})
