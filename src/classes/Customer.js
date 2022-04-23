import Booking from "./Booking.js";

class Customer {
  constructor(data) {
    this.currentDate = ''
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.pastBookings = []
    this.presentBooking = {}
    this.futureBookings = []
    this.totalSpent = 0
    this.getCurrentDate()

    // this.updateBookings(bookings)
  }

  getCurrentDate() {
      // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    this.currentDate = date
    return date
  }

  calculateTotalSpent() {
     this.allBookings.forEach(booking => {
       if(booking.room && booking.room.costPerNight) {
         this.totalSpent += booking.room.costPerNight
       }
     })
   }

   sortBookings() {
     let past = this.allBookings.filter(booking => booking.date < this.currentDate)
     this.pastBookings = past
     
     let present = this.allBookings.filter(booking => booking.date === this.currentDate)
     this.presentBooking = present
     let future = this.allBookings.filter(booking => booking.date > this.currentDate)
     this.futureBookings = future
   }



//.filter(booking => booking.date < this.date





  // updateBookings(somedata) {
  //   somedata.filter(booking => booking.userID === this.id)
  //   .forEach(booking => this.allBookings.push(booking)
  // )}

  getBookings() {
    return this.bookings
  }

}
export default Customer;
