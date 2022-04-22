import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = []) {
    this.currentDate = ''
    this.bookingData = bookingData
    this.roomData = roomData
    this.customerData = customerData
    this.allBookings = []
    this.allRooms = []
    this.currentCustomer = {}
    this.currentCustomerBookings = []
  }

  getCurrentDate() {
    // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.currentDate = date
  }

  addCustomer(id) {
    let newCustomer = this.customerData.find(customer => customer.id === id)
    this.currentCustomer = new Customer(newCustomer)
  }

  updateAllBookings() {
    this.bookingData.forEach(booking => this.allBookings.push(new Booking(booking)))
  }

  updateAllRooms() {
    this.roomData.forEach(room => this.allRooms.push(new Room(room)))
  }

  getCustomerBookings(id) {
    let bookings = this.allBookings.filter(booking => booking.userID === id)
    this.currentCustomerBookings = bookings
    return bookings
  }

  makeBooking(somedata) {

  }

}

export default Hotel;
