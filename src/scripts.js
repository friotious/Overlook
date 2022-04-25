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
//
//<-----QUERY SELECTORS-------------------------->///////////
//
//query select submitButton
// button has conditional to check value of calenderToday
// if roomtype === 'pick a room' then ONLY filter  by date,
// else, filter by date, THEN filter that by roomType,
// THEN display



let spent = document.querySelector('#totalSpent')
let userName = document.querySelector('#userName')
let ccBookings = document.querySelector('.customer-bookings-data')
let availRooms = document.querySelector('.available-rooms-data')
let currentCustomer = document.querySelector('#userName')
let totalSpent = document.querySelector('#totalSpent')
let calendar = document.getElementById('calendarDate')
let submitButton = document.getElementById('submitButton')
let roomInputBox = document.getElementById('roomInputBox')
// let checkAvailabilityBtn = document.getElementById('checkAvailability')
let roomSelection = document.getElementById("roomTypes")
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

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

// roomSelection.addEventListener('onclick', () => {
//
//   ccBookings.classList.add('hidden')
//   let roomsByType = hotel.getRoomsByType(roomSelection.value)
//   roomSelection.value// === 'Choose a Room' then run displayAvailableRooms(date)
// // if roomASelction.value === anything else, take that value and filter
//
//   //when clicked, we want to filter out rooms that match this Value and return them?
//   //
//
//   // if
// })


roomInputBox.addEventListener('input', (e) => {
    handleFormInput(e)
})

let handleFormInput = (e) => {
  let date = moment(calendar.value).format('YYYY/MM/DD')
    if (e.target.id === 'calendarDate') {
      roomSelection.disabled = false;
      ccBookings.classList.add('hidden')
      displayAvailableRooms(date)
      availRooms.classList.remove('hidden')
    } else if (e.target.id === 'roomTypes') {
      hotel.getAvailRooms(date)    //<-----Avalable
    }
}
// submitButton.addEventListener('click', () => {
//   console.log(roomSelection.value, 'roomValue')
//   if (roomSelection.value === 'Choose a roomtype') {
//
//     displayAvailableRooms(moment(calendar.value).format('YYYY-MM-DD'))
//   } else {
//     let roomsByDate = hotel.getAvailRooms(calendar.value)
//       let roomsByType = roomsByDate.filter(room => {
//         return room.roomType === roomSelection.value
//       })
//       console.log(roomsByType, 'roomebythypw')
//     }
// })
//
//
// calendar.addEventListener('input', () => {
//
// })






//'rooms', rooms)
function displayAvailableRooms(date) {
  let rooms = hotel.getAvailRooms(date)//.filter(room => room.roomType === roomSelection.value)
  // console.log(roomSelection.value, 'room select')
  availRooms.innerHTML = ''
  rooms.forEach(room => {
    availRooms.innerHTML +=
    `<p id='room${room.number}'>Rooms avilable on ${calendarDate.value}</p>
      <ul>Room #${room.number} - ${capitalize(room.roomType)}</ul>
      <ul>Bidet: ${room.bidet ? 'Yes' : 'sorry, no' }
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
    calendar.value = moment().format('YYYY-MM-DD');
  });
};
