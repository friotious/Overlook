class Room {
  constructor(data) {
    this.roomNumber = data.number
    this.roomType = data.roomType
    this.bidet = data.bidet
    this.bedSize = data.bedSize
    this.numBeds = data.numBeds
    this.costPerNight = data.costPerNight
  }

  getRoomNumber() {
    return this.roomNumber
  }

  getRoomType() {
    return this.roomType
  }

  hasBidet() {
    return this.bidet
  }

  getBedSize() {
    return this.bedSize
  }

  getNumBeds() {
    return this.numBeds
  }

  getCostPerNight() {
    return this.costPerNight
  }

}
export default Room;
