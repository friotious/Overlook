import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = [], id) {
    this.currentDate = ''
    this.bookingData = bookingData
    this.roomData = roomData
    this.customerData = customerData
    this.allBookings = []
    this.allRooms = []
    this.currentCustomerID = id
    this.getCurrentDate()
    //this.addCustomer(id)
  }

  getCurrentDate() {
    // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    this.currentDate = date
    return date
  }

  // addCustomer(id) {
  //   this.getCustomerBookings(id)
  //   let newCustomer = this.customerData.find(customer => customer.id === id)
  // }

  updateAllBookings() {
    this.bookingData.forEach(booking => this.allBookings.push(new Booking(booking)))
  }

  updateAllRooms() {
    this.roomData.forEach(room => this.allRooms.push(new Room(room)))
  }

  getBookingByID(id) {
    this.currentCustomerID = id
    return this.allBookings.filter(booking => booking.userID === this.currentCustomerID)
  }
//   let datedbookings = []
// //declare empty array
//   let bookedArray = rooms.forEach(room => {
//     //declare variable method -- take rooms array -> iterate over each room
//     let result = bookings.filter(booking => booking.roomNumber === room.number)
//     // result of each action on room element is a variable that is iterating over
//     // bookings array and filtering out the booking elements that match the room number
//     return datedbookings.push(result)
//   })
  // this.allRooms.forEach(room => {
  //   let result = this.allBookings.filter(booking => booking.roomNumber === room.number)
  // })  --> repl --> https://replit.com/@friotious/WrithingSlategreyPipeline#index.js

  getCustomerBookings() {
    let bookings = this.allBookings.filter(booking => booking.userID === this.currentUserID)
    return bookings
  }

  getCostPerNight(roomNumber) {
    return this.allRooms.filter(room => room.roomNumber === roomNumber)[0].costPerNight
  }

  makeBooking(somedata) {

  }

}

export default Hotel;
