
class Hotel {
  constructor(bookingData, roomData, customerData, id) {
    this.bookingData = bookingData
    this.roomData = roomData
    this.customerData = customerData
    this.allBookings = []

    this.currentCustomerId = id
    this.currentCustomer = {}
    this.currentCustomerBookings = null
  }

  updateCurrentCustomer(id, bookings) {

  }

  updateAllBookings() {
    
  }

  updateCustomerBookings() {

  }

  makeBooking(booking, room) {

  }

  getCustomerBookings(id) {
    let result = this.allBookings.filter(booking => booking.userID === id)
    this.currentCustomerBookings = result
  }
}

export default Hotel;
