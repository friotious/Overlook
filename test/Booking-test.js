import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';


describe('Booking', () => {
  let booking

  beforeEach(() => {
  booking = new Booking(bookings[0], rooms[3])

  })

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  })

  it('Should be an instance of recipe', () => {
        expect(booking).to.be.instanceOf(Booking)
    });

  it('Should hold Booking data', () => {
    expect(booking.id).to.equal("5fwrgu4i7k55hl6t8")
    expect(booking.userID).to.equal(1)
    expect(booking.date).to.equal("2022/02/05")
    expect(booking.roomNumber).to.equal(12)
    expect(booking.cost).to.equal(294.56)
  })

  it("Should hold room data for room booked", () => {
    expect(booking.roomData).to.deep.equal(    {
          number: 12,
          roomType: "single room",
          bidet: false,
          bedSize: "twin",
          numBeds: 2,
          costPerNight: 172.09
        })
  })

  it("Should have a method to return booking cost", () => {
    expect(booking.getCost()).to.equal(172.09)
  })

  it("Should have a method to return date", () => {
    expect(booking.getDate()).to.equal("2022/02/05")
  })

})
