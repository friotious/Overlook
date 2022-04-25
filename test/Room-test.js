import chai from 'chai';
const expect = chai.expect;
import { bookings, rooms, customers} from './testData.js'
import Room from '../src/classes/Room.js';

describe('Room', () => {

  let room

  beforeEach(() => {

    room = new Room(rooms[3])

  })

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it("Should hold room data for room", () => {
    room = new Room(rooms[3])
    expect(room.number).to.equal(12)
    expect(room.roomType).to.equal('single room')
    expect(room.bidet).to.equal(false)
    expect(room.numBeds).to.equal(2)
    expect(room.costPerNight).to.equal(172.09)
  })

  it('Should return info about room', () => {
    room = new Room(rooms[3])
    expect(room.getRoomNumber()).to.equal(12)
    expect(room.getRoomType()).to.equal("single room")
    expect(room.hasBidet()).to.equal(false)
    expect(room.getBedSize()).to.equal("twin")
    expect(room.getNumBeds()).to.equal(2)
    expect(room.getCostPerNight()).to.equal(172.09)

  })

  it('Should return message if room does not hold info', () => {
    room = new Room(rooms[5])
    expect(room.getRoomNumber()).to.equal('no data')
    expect(room.getRoomType()).to.equal('no data')
    expect(room.getBedSize()).to.equal('no data')
    expect(room.getNumBeds()).to.equal('no data')
    expect(room.getCostPerNight()).to.equal('no data')
  })
})
