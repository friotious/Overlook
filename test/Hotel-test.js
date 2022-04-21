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
    //newBooking = new Booking(bookings[4], rooms[3])
    hotel = new Hotel(bookings, rooms, customers)
    //customer = new Customer(customers[0])
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should have the current date', () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    hotel.getCurrentDate()
    expect(hotel.currentDate).to.equal(date)
  })

  it('Should hold booking data objects', () => {
    expect(hotel.bookingData[0]).to.deep.equal({
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 1,
      "date": "2022/04/22",
      "roomNumber": 15
    })
  })

  it('Should hold all roomData', () => {
    expect(hotel.roomData[0].costPerNight).to.equal(358.4)
  })

    it('Should hold all customerData', () => {
      expect(hotel.customerData[0]).to.deep.equal({
        "id": 1,
        "name": "Leatha Ullrich"
      })
    })

    it('Should have a method to update allBookings into array of instances of Booking', () => {
      expect(hotel.bookingData[0]).to.be.an('object')
      hotel.updateAllBookings()
      expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
    })

    it('Should create and hold a new Customer', () => {
        hotel.makeID(1)
        expect(hotel.currentCustomerID).to.equal(1)
        hotel.newCustomer(hotel.customerData[0])
        expect(hotel.currentCustomer).to.be.an.instanceOf(Customer)
        expect(hotel.currentCustomer.id).to.equal(1)
    })

    it.skip('Should return current Customers Bookings', () => {
      expect(hotel.getCustomerBookings(1)).to.be.a('array')
      expect(hotel.getCustomerBookings(1)[0].id).to.equal("5fwrgu4i7k55hl6sz")
    })

    it.skip('Should have a method to fill the current customers booking array with Bookings', () => {
      hotel.updateCustomerBookings()
      expect(hotel.currentCustomerBookings[0]).to.deep.equal()
    })

    it.skip('Should have a method to make a currentCustomer', () => {
      hotel.updateCurrentCustomer(1,)
      expect(this.currentCustomer).to.be.an.instanceOf(Customer)
    })

    it.skip('Should have a method to update allBookings', () => {
      this.bookingData.push({
      "id": "5fwrgu4i7k55hl6v6",
      "userID": 41,
      "date": "2022/02/19",
      "roomNumber": 12
    })
      hotel.updateAllBookings() // --> sortBOokings by date, compare arrays
      expect(hotel.allBookings[11]).to.be.an.instanceOf(Booking)
    })
  })
