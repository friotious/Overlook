import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";
var dayjs = require('dayjs')
let moment = require('moment')

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = [], id) {
    this.currentDate = moment().format('YYYY/MM/DD');
    this.allBookings = []
    this.allRooms = []
    this.allCustomers = []
    this.currentCustomerID = id
    this.currentCustomer = {}
    this.getCurrentDate()
    this.updateAllRooms(roomData)
    this.updateAllBookings(bookingData)
    this.addRoom()
    this.updateAllCustomers(customerData)
    this.addCurrentCustomer(id)
    this.addBookings()
  }

  updateAllRooms(somedata) {
    somedata.forEach(room => this.allRooms.push(new Room(room)))
  }

  updateAllBookings(somedata) {
    somedata.forEach(booking => this.allBookings.push(new Booking(booking)))
  }

  updateAllCustomers(somedata) {
    somedata.forEach(customer => this.allCustomers.push(new Customer(customer)))
  }

  addCurrentCustomer(id) {
    let newCustomer = this.allCustomers.find(customer => customer.id === id)
    this.currentCustomer = newCustomer
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

  getCurrentDate() {
    this.currentDate = moment().format('YYYY/MM/DD');
    return this.currentDate
  }

  getBookingsByID(id) {
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

    getAllCustomerBookings() {
      return this.currentCustomer.bookings
    }

    makeBooking(somedata) {

    }

  }

  export default Hotel;
