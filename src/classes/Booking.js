class Booking {
  constructor(bookingData, room = {}) {
    this.id = bookingData.id
    this.userID = bookingData.userID
    this.date = bookingData.date
    this.room = room
  }

  getCost() {
    return this.roomData.costPerNight
  }

  getDate() {
    return this.date
  }
}
export default Booking;
