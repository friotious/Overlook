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
    //this.addCustomer(id)
  }

  getCurrentDate() {
    // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.currentDate = date
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
