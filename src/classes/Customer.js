import Booking from "./Booking.js";

class Customer {
  constructor(data, bookings = []) {
    this.id = data.id
    this.name = data.name
    this.bookings = []
    this.updateBookings(bookings)
  }

  updateBookings(somedata) {
    somedata.filter(booking => booking.userID === this.id)
    .forEach(booking => this.bookings.push(new Booking(booking)))
  }

  getBookings() {
    return this.bookings
  }

}
export default Customer;
