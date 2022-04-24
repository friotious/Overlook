import chai from 'chai';
const expect = chai.expect;

import { bookings, rooms, customers} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';
import Room from '../src/classes/Room.js';

describe('Room', () => {
  let hotel
  let booking
  let room
  beforeEach(() => {
    hotel = new Hotel(bookings, rooms, customers, 1 )
    booking = new Customer(customers[0])
    room = hotel.allBookings[4].room
  })

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it("Should hold room data for room", () => {
    expect(room.number).to.equal(12)
    expect(room.roomType).to.equal('single room')
    expect(room.bidet).to.equal(false)
    expect(room.numBeds).to.equal(2)
    expect(room.costPerNight).to.equal(172.09)
  })

  it('Should return info about room', () => {
    expect(room.getRoomNumber()).to.equal(12)
    expect(room.getRoomType()).to.equal("single room")
    expect(room.hasBidet()).to.equal(false)
    expect(room.getBedSize()).to.equal("twin")
    expect(room.getNumBeds()).to.equal(2)
    expect(room.getCostPerNight()).to.equal(172.09)

//-----> maybe make array of Data? <-----------
    // expect(room.allData[1]).to.deep.equal("single room")
  })
})
