import Booking from "./Booking.js";

class Customer {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.totalSpent = 0
    // this.updateBookings(bookings)
  }

  getTotalSpent() {
    this.allBookings.forEach(booking => {

    })
  }

  // updateBookings(somedata) {
  //   somedata.filter(booking => booking.userID === this.id)
  //   .forEach(booking => this.allBookings.push(booking)
  // )}

  getBookings() {
    return this.bookings
  }

}
export default Customer;
