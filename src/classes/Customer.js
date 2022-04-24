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
    let sortAll = this.allBookings.sort((a, b) => {
      return a.date.split('/').join('') - b.date.split('/').join('')
    })
    let past = sortAll.filter(booking => booking.date.split('/').join('') < this.currentDate.split('/').join(''))
    this.pastBookings = past
    let future = sortAll.filter(booking => booking.date.split('/').join('') >= this.currentDate.split('/').join(''))
    this.futureBookings = future
  }

  sortByDate(bookings) {

  }




// //const Moment = require('moment')
// const array = [{date:"2018-05-11"},{date:"2018-05-12"},{date:"2018-05-10"}]
// const sortedArray  = array.sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'))

  calculateTotalSpent() {
    this.totalSpent = 0
     this.allBookings.forEach(booking => {
       if(booking.room && booking.room.costPerNight) {
         this.totalSpent += booking.room.costPerNight
       }
     })
     return this.totalSpent
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
