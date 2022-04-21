import Booking from "./Booking.js";
class Hotel {
  constructor(bookingData = [], roomData = [], customerData = []) {
    this.currentDate = ''
    this.bookingData = bookingData
    this.roomData = roomData
    this.customerData = customerData
    this.allBookings = []
    this.currentCustomerID = 0
  }

  getCurrentDate() {
    // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.currentDate = date
  }

  makeID(id) {
    this.currentCustomerID = id

  }
    
  updateCurrentCustomer(id, bookings) {

  }

  updateAllBookings() {
    console.log(this.bookingData, 'data')
    this.bookingData.forEach(booking => this.allBookings.push(new Booking(booking)))
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
