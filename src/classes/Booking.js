
class Booking {
  constructor(bookingData, roomData) {
    this.id = bookingData.id
    this.userID = bookingData.userID
    this.date = bookingData.date
    this.roomData = roomData
    this.roomNumber = roomData.number
    this.roomType = roomData.roomType
    this.bidet = roomData.bidet
    this.bedSize = roomData.bedSize
    this.numBeds = roomData.numBeds
    this.cost = roomData.costPerNight
  }

  getCost() {
    return this.cost
  }

  getDate() {
    return this.date
  }

}
export default Booking;
