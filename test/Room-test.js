import chai from 'chai';
const expect = chai.expect;

import { bookings, rooms, customers} from './testData.js'
// import Customer from '../src/classes/Customer.js';
// import Booking from '../src/classes/Booking.js';
// import Hotel from '../src/classes/Hotel.js';
import Room from '../src/classes/Room.js';

describe('Room', () => {
  // let hotel
  // let customer
  let room
  beforeEach(() => {
    // hotel = new Hotel(bookings, rooms, customers, customers[0])
    // customer = new Customer(customers[0])
    room = new Room(rooms)
  })

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  
