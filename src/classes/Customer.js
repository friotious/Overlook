import Booking from "./Booking.js";

class Customer {
  constructor(data, date) {
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.totalSpent = 0
    // this.updateBookings(bookings)
  }

  calculateTotalSpent() {
    console.log(this.allBookings, 'allbookings')
     this.allBookings.forEach(booking => {
       if(booking.room && booking.room.costPerNight) {
         this.totalSpent += booking.room.costPerNight
    }
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
