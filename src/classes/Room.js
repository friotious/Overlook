class Room {
  constructor(data) {
    this.number = data.number ||  'no data'
    this.roomType = data.roomType || 'no data'
    this.bidet = '' ? 'no data'  : data.bidet
    this.bedSize = data.bedSize || 'no data'
    this.numBeds = data.numBeds || 'no data'
    this.costPerNight = data.costPerNight || 'no data'
  }

  getRoomNumber() {
    return this.number
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
