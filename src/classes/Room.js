class Room {
  constructor(data) {
    this.number = data.number
    this.roomType = data.roomType
    this.bidet = data.bidet
    this.bedSize = data.bedSize
    this.numBeds = data.numBeds
    this.costPerNight = data.costPerNight
  }
  
  //-----> maybe make array of Data? <-----------
      // expect(room.allData[1]).to.deep.equal("single room")

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
