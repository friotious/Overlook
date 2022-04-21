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
    room = new Room(rooms[3])
  })

  it.skip('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it.skip("Should hold room data for room", () => {
    expect(room.costPerNight).to.equal(172.09)
  })

  it.skip('Should return info about room', () => {
    expect(room.getRoomNumber()).to.equal(12)
    expect(room.getRoomType()).to.equal("single room")
    expect(room.hasBidet
      ()).to.equal(false)
    expect(room.getBedSize()).to.equal("twin")
    expect(room.getNumBeds()).to.equal(2)
    expect(room.getCostPerNight()).to.equal(172.09)

//-----> maybe make array of Data? <-----------
    // expect(room.allData[1]).to.deep.equal("single room")
  })




})
