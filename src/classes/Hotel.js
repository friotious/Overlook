import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";
var dayjs = require('dayjs')
let moment = require('moment')

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = [], id) {
    this.currentDate = moment().format('YYYY/MM/DD');
    this.allBookings = bookingData.map(booking => new Booking(booking))
    this.allRooms = roomData.map(room => new Room(room))
    this.allCustomers = customerData.map(customer => new Customer(customer))
    this.currentCustomerID = id
    this.currentCustomer = {}
    this.availableRooms;
  }

  getRoomsByType(rooms, roomType) {
    return [rooms].filter(room => room.roomType === roomType)
  }

  getAvailRooms(date) {
    console.log(this.availableRooms, this.allRooms, 'allROomms')
    this.availableRooms = this.allRooms
    let notAvailable = this.allBookings.filter(booking => {
      return booking.date === date}).map(booking => booking.roomNumber)
      if(!notAvailable[0]) {
        return this.availableRooms
      } else if (notAvailable[0]) {
          this.availableRooms = this.availableRooms.filter(room => !notAvailable.includes(room.number))
          console.log(this.availableRooms, 'availableRooms')
          return this.availableRooms
      }
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
