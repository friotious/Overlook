import chai from 'chai';
const expect = chai.expect;

import { bookings, customers, rooms} from './testData.js'
import Customer from '../src/classes/Customer.js';
import Booking from '../src/classes/Booking.js';
import Hotel from '../src/classes/Hotel.js';

describe('Customer', () => {
  let customer

  beforeEach(() => {
  customer = new Customer()
  })

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

})
