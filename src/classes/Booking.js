class Booking {
  constructor(bookingData, roomData = []) {
    this.id = bookingData.id
    this.userID = bookingData.userID
    this.date = bookingData.date
    this.roomData = roomData
  }

  getCost() {
    return this.roomData.costPerNight
  }

  getDate() {
    return this.date
  }
}
export default Booking;
