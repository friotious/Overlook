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
let availRooms = document.querySelector('.available-rooms-data')
let currentCustomer = document.querySelector('#userName')
let totalSpent = document.querySelector('#totalSpent')
let calendar = document.getElementById('calendarDate')
let checkAvailabilityBtn = document.getElementById('checkAvailability')
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

// if (room.numbeds > 1) {
//
// }
//
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

calendar.addEventListener('change', () => {
  ccBookings.classList.add('hidden')
  displayAvailableRooms(moment(calendar.value).format('YYYY/MM/DD'))
  availRooms.classList.remove('hidden')
})

function displayAvailableRooms(date) {
  let rooms = hotel.getAvailRooms(date)
  availRooms.innerHTML = ''
  rooms.forEach(room => {
    availRooms.innerHTML +=
    `<p>Rooms avilable on ${calendarDate.value}</p>
      <ul>Room #${room.number} - ${capitalize(room.roomType)}</ul>
      <ul>Beds: ${room.numBeds} </ul>
      <ul>Bed size: ${capitalize(room.bedSize)}</ul>
      <ul>Cost: $${room.costPerNight}</ul>`

  })
}


window.onload = (event) => {
  Promise.all([bookings(), rooms(), customers()]).then((values) => {
    hotel = new Hotel(values[0].bookings, values[1].rooms, values[2].customers)
    hotel.addRoom()
    hotel.addBookings()
    hotel.addCurrentCustomer(1)
    customer = hotel.currentCustomer
    customer.sortBookings()
    displayCCBookings()
    displayUserName()
    displaySpent()
    //calendarToday.value = moment().format('YYYY/MM/DD')
    //calendar.min = moment().format('YYYY-MM-DD')
  });
};
