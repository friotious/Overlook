import Booking from "./Booking.js";

class Customer {
  constructor(data, bookings = []) {
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.updateBookings(bookings)
  }

  updateBookings(somedata) {
    somedata.filter(booking => booking.userID === this.id)
    .forEach(booking => this.allBookings.push(booking)
  )}

  getBookings() {
    return this.bookings
  }

}
export default Customer;
