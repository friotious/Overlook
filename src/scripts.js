// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import {
  bookings,
  customers,
  rooms
} from './apiCalls.js'
import Hotel from './classes/Hotel.js';
import datepicker from 'js-datepicker';
let moment = require('moment')

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
//------ HTML date element use onkeydown="return false" to prevent typing
// make variabel ---
//const picker = datepicker(input, { alwaysShow: true })
//  make querySelector for input, next parameter is 'state' of calender
//  make eventListener for 'click' should return date in some format.
//----------
let spent = document.querySelector('#totalSpent')
let userName = document.querySelector('#userName')
let ccBookings = document.querySelector('.customer-bookings-data')
let currentCustomer = document.querySelector('#userName')
let totalSpent = document.querySelector('#totalSpent')
let hotel = {}

function displayUserName() {
  userName.innerText = hotel.currentCustomer.name
}

function displaySpent() {
  spent.innerText = hotel.currentCustomer.calculateTotalSpent()
}

function displayCCBookings() {
  let past = hotel.currentCustomer.getPastBookings()
  console.log(hotel.currentCustomer.getPastBookings(), 'get[at]')
  console.log(past, 'past')
  let future = hotel.currentCustomer.getFutureBookings()
  console.log(future, 'future')
  ccBookings.innerHTML = ''
  //Display past bookings
  past.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="past-booking-card" >
        <ul>You Stayed here on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.room.roomType}</ul>
        <ul>${booking.room.bedSize}</ul>
      </div>`
  })

  future.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="future-booking-card" >
        <ul>You're booked on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.room.roomType}</ul>
        <ul>${booking.room.bedSize}</ul>
    </div>`
  })
}

Promise.all([bookings, rooms, customers]).then((values) => {
  hotel = new Hotel(values[0].bookings, values[1].rooms, values[2].customers);
  //console.log(moment('2022/02/05').format(), 'moment')
  hotel.addCurrentCustomer(1)
  hotel.currentCustomer.sortBookings()
  displayCCBookings()
  displayUserName()
  displaySpent()
});
