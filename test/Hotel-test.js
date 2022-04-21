import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Hotel', () => {
  let hotel

  beforeEach(() => {
  hotel = new Hotel()
  })

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

})
