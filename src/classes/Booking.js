import Room from "./Room.js";

class Booking {
  constructor(bookingData) {
    this.id = bookingData.id
    this.userID = bookingData.userID
    this.date = bookingData.date
    this.roomNumber = bookingData.roomNumber
    this.room = {}
  }

  getCost() {
    return this.room.costPerNight
  }

  getBed() {
    return this.room.bedSize
  }

  getDate() {
    return this.date
  }
}
export default Booking;
