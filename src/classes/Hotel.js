import Booking from "./Booking.js";
import Room from "./Room.js";
import Customer from "./Customer.js";

class Hotel {
  constructor(bookingData = [], roomData = [], customerData = [], id) {
    this.currentDate = ''
    //this.bookingData = bookingData
    //this.roomData = roomData
    //this.customerData = customerData
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
    //this.addCustomer(id)
  }

  updateAllRooms(somedata) {
    somedata.forEach(room => this.allRooms.push(new Room(room)))
  }

  updateAllBookings(somedata) {
    somedata.forEach(booking => this.allBookings.push(new Booking(booking)))
  }

  updateAllCustomers(somedata) {
    somedata.forEach(booking => this.allCustomers.push(new Customer(booking)))
  }

  addCurrentCustomer(id) {
    this.currentCustomer = this.allCustomers.find(customer => customer.id === id)
  }

  // addBookings() {
  //   this.allCustomers.forEach(customer => this.allBookings.forEach(booking => {
  //     if (booking.userID === customer.id) {
  //       customer.bookings.push(booking)
  //     }
  //   }))
  // }

  addRoom() {
    this.allBookings.forEach(booking => this.allRooms.forEach(room => {
      if (room.number === booking.roomNumber) {
        booking.room.push(room)
      }
    }))
  }

  getCurrentDate() {
      // ---->   input type date in HTML <------//
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    this.currentDate = date
    return date
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
