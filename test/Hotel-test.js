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
  let date

  beforeEach(() => {
    hotel = new Hotel(bookings, rooms, customers, 1 )
    date = moment().format('YYYY/MM/DD')
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('Should have the current date', () => {
    expect(hotel.currentDate).to.equal(date)
  })

  it('Should add/hold currentCustomer ID', () => {
    expect(hotel.currentCustomer.id).to.equal()
    hotel.addCurrentCustomer(2)
    expect(hotel.currentCustomer.id).to.equal(2)
  })

  it('Should hold instances of all Customers', () => {
    expect(hotel.allCustomers[0]).to.be.an.instanceOf(Customer)
  })

  it('Should hold instances of all Rooms', () => {
    expect(hotel.allRooms[0]).to.be.an.instanceOf(Room)
  })

  it('Should hold instances of all Bookings', () => {
    expect(hotel.allBookings[0]).to.be.an.instanceOf(Booking)
  })

  it('Should add Room to Bookings, Bookings to Customers', () => {
    expect(hotel.allCustomers[0].allBookings).to.deep.equal([])
    hotel.addBookings()
    expect(hotel.allCustomers[0].allBookings[0]).to.be.instanceOf(Booking)
    expect(hotel.allCustomers[0].allBookings[0].room).to.deep.equal({})
    hotel.addRoom()
    expect(hotel.allCustomers[0].allBookings[0].room).to.be.instanceOf(Room)
  })

  it('Should add instance of current Customer', () => {
    expect(hotel.currentCustomer).to.deep.equal({})
    hotel.addCurrentCustomer(1)
    expect(hotel.currentCustomer).to.be.an.instanceOf(Customer)
  })

  it('Should have a method to get Bookings by id', () => {
    expect(hotel.getBookingsByID(2)[0].userID).to.equal(2)
  })

  it('Should have a method to get available rooms by date', () => {
    expect(hotel.availableRooms).to.equal(undefined)
    hotel.getAvailRoomsByDate(date)
    expect(hotel.availableRooms[0]).to.be.instanceOf(Room)
  })

  it('Should have a method to get available rooms by room type', () => {
    expect(hotel.availableRooms).to.equal(undefined)
    hotel.getAvailRoomsByDate(date)
    hotel.getAvailRoomsByType('suite')
    expect(hotel.availableRooms[0]).to.be.instanceOf(Room)
  })

})
