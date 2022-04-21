
class Hotel {
  constructor(bookingData, roomData, customerData, currentCustomer) {
    this.currentDate = ''
    this.bookingData = bookingData
    this.roomData = roomData
    this.customerData = customerData
    this.allBookings = []

    this.currentCustomerId = currentCustomer.id
    this.currentCustomer = currentCustomer
    this.currentCustomerBookings = null
  }

  getCurrentDate() {
    // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.currentDate = date
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
