import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";
var dayjs = require('dayjs')
let moment = require('moment')

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = [], id) {
    this.currentDate = moment().format('YYYY/MM/DD');
    this.allBookings = this.saveBookings(bookingData)
    this.allRooms = roomData.map(room => new Room(room))
    this.allCustomers = customerData.map(customer => new Customer(customer))
    this.currentCustomerID = id
    this.currentCustomer = {}
    this.availableRooms;
  }

  saveBookings(bookingData) {
    return bookingData.map(booking => new Booking(booking))
  }

  getAvailRoomsByType(roomType) {
    if (roomType === 'Choose a roomtype') {
      return this.availableRooms
    }
    this.availableRooms = this.availableRooms.filter(room => room.roomType === roomType)
    if (!this.availableRooms[0]) {
      return false
    }
    return this.availableRooms
  }

  getAvailRoomsByDate(date) {
    this.availableRooms = this.allRooms
    let notAvailable = this.allBookings.filter(booking => {
      return booking.date === date}).map(booking => booking.roomNumber)
      if(!notAvailable[0]) {
        return this.availableRooms
      } else if (notAvailable[0]) {
          this.availableRooms = this.availableRooms.filter(room => !notAvailable.includes(room.number))
          return this.availableRooms
      }
  }

  addCurrentCustomer(id) {
    this.currentCustomer = this.allCustomers.find(customer => customer.id === parseInt(id))
  }

  addBookings() {
    this.allCustomers.forEach(customer => {
      var bookings = this.allBookings.filter(booking => {
        return booking.userID === customer.id
      })
      customer.allBookings = bookings
    })
  }

  addRoom() {
    this.allBookings.forEach(booking => {
      var room = this.allRooms.find(room => {
        return room.number === booking.roomNumber
      })
      booking.room = room
    })
  }

  getBookingsByID(id) {
    this.currentCustomerID = id
    return this.allBookings.filter(booking => booking.userID === this.currentCustomerID)
  }

  getAllCustomerBookings() {
    return this.currentCustomer.bookings
  }

  checkID(id) {
    return this.allCustomers.find(customer => customer.id === parseInt(id))
  }

  makeBooking(somedata) {
  }

  }

  export default Hotel;
