class Booking {
  constructor(bookingData) {
    this.id = bookingData.id
    this.userID = bookingData.userID
    this.date = bookingData.date
    this.room = []
  }

  getCost() {
    return this.roomData.costPerNight
  }

  getDate() {
    return this.date
  }
}
export default Booking;
