import Booking from "./Booking.js";
let dayjs = require('dayjs')
let moment = require('moment')

class Customer {
  constructor(data) {
    this.currentDate = moment().format('YYYY/MM/DD');
    this.id = data.id
    this.name = data.name
    this.allBookings = []
    this.pastBookings = []
    this.futureBookings = []
    this.totalSpent = 0
  }

  // ---->   input type date in HTML <------//
  sortBookings() {
    let sortAll = this.allBookings.sort((a, b) => {
      return a.date.split('/').join('') - b.date.split('/').join('')
    })
    let past = sortAll.filter(booking => booking.date.split('/').join('') < this.currentDate.split('/').join(''))
    this.pastBookings = past
    let future = sortAll.filter(booking => booking.date.split('/').join('') >= this.currentDate.split('/').join(''))
    this.futureBookings = future
  }

  calculateTotalSpent() {
    this.totalSpent = 0
     this.allBookings.forEach(booking => {
       if(booking.room && booking.getCost()) {
         this.totalSpent += booking.getCost()
       }
     })
     return Math.round(this.totalSpent * 100) / 100
   }

   getAllBookings() {
     return this.allBookings
   }

   getPastBookings() {
     return this.pastBookings
   }

   getFutureBookings() {
     return this.futureBookings
   }

}
export default Customer;
