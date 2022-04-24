//<--------IMPORTS--------------------------->/////////
import './css/styles.css';
import {
  bookings,
  customers,
  rooms
} from './apiCalls.js'
import Hotel from './classes/Hotel.js';
import datepicker from 'js-datepicker';
let moment = require('moment')

//------ HTML date element use onkeydown="return false" to prevent typing
// make variabel ---
//const picker = datepicker(input, { alwaysShow: true })
//  make querySelector for input, next parameter is 'state' of calender
//  make eventListener for 'click' should return date in some format.
//----------

//<-----QUERY SELECTORS-------------------------->///////////
let spent = document.querySelector('#totalSpent')
let userName = document.querySelector('#userName')
let ccBookings = document.querySelector('.customer-bookings-data')
let currentCustomer = document.querySelector('#userName')
let totalSpent = document.querySelector('#totalSpent')
let hotel
let customer

function displayUserName() {
  userName.innerText = hotel.currentCustomer.name
}

function displaySpent() {
  spent.innerText = hotel.currentCustomer.calculateTotalSpent()
}

function displayCCBookings() {
  let past = hotel.currentCustomer.getPastBookings()
  let future = hotel.currentCustomer.getFutureBookings()
  ccBookings.innerHTML = ''
  //Display past bookings
  past.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="past-booking-card" >
        <ul>You Stayed here on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.getRoom()}</ul>
        <ul>${booking.getBed()}</ul>
      </div>`
  })

  future.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="future-booking-card" >
        <ul>You're booked on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.getRoom()}</ul>
        <ul>${booking.getBed()}</ul>
    </div>`
  })
}

Promise.all([bookings, rooms, customers]).then((values) => {
  hotel = new Hotel(values[0].bookings, values[1].rooms, values[2].customers);
  hotel.addCurrentCustomer(1)
  customer = hotel.currentCustomer
  customer.sortBookings()
  displayCCBookings()
  displayUserName()
  displaySpent()
});
