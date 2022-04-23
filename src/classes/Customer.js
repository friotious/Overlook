import Booking from "./Booking.js";
let dayjs = require('dayjs')
let moment = require('moment')
class Customer {
  constructor(data) {
    this.currentDate = ''
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.pastBookings = ''
    this.presentBooking = ''
    this.futureBookings = ''
    this.totalSpent = 0
    this.getCurrentDate()

    // this.updateBookings(bookings)
  }

  // ---->   input type date in HTML <------//
  getCurrentDate() {
    this.currentDate = moment().format('YYYY/MM/DD');
    return this.currentDate
  }

  sortBookings() {
    let past = this.allBookings.filter(booking => booking.date < this.currentDate)
    this.pastBookings = past
    let present = this.allBookings.filter(booking => booking.date === this.currentDate).pop()
    this.presentBooking = present
    let future = this.allBookings.filter(booking => booking.date > this.currentDate)
    this.futureBookings = future
  }

  calculateTotalSpent() {
     this.allBookings.forEach(booking => {
       if(booking.room && booking.room.costPerNight) {
         this.totalSpent += booking.room.costPerNight
       }
     })
   }

   getAllBookings() {
     return this.allBookings
   }


   getPastBookings() {
     return this.pastBookings
   }

   getPresentBooking() {
     return this.presentBooking
   }

   getFutureBookings() {
     return this.futureBookings
   }

  getBookings() {
    return this.bookings
  }

}
export default Customer;
