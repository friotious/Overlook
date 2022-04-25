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

//------
//  const picker = datepicker(input, { alwaysShow: true })
//  make querySelector for input, next parameter is 'state' of calender
//  make eventListener for 'click' should return date in some format.
//----------

//<-----QUERY SELECTORS-------------------------->///////////



let userName = document.getElementById('userName')
let spent = document.getElementById('totalSpent')
let ccBookings = document.querySelector('.customer-bookings-data')
let availRooms = document.querySelector('.available-rooms-data')
let calendarBox = document.getElementById('calendarBox')
let calendar = document.getElementById('calendarDate')
let submitButton = document.getElementById('submitButton')
let roomInputBox = document.getElementById('roomInputBox')
let dateInputError = document.getElementById('dateInputError')
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
        <ul>${booking.roomNumber}</ul>
        <ul>${booking.getBed()}</ul>
      </div>`
  })

  future.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="future-booking-card" >
        <ul>You're booked on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.roomNumber}</ul>
        <ul>${booking.getBed()}</ul>
    </div>`
  })
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}


roomInputBox.addEventListener('input', (e) => {
  dateInputError.classList.add('hidden')
  checkForDate(e)
  filterFormInput(e)
})

let filterFormInput = (e) => {
  let date = moment(calendar.value).format('YYYY/MM/DD')
  if (!checkForDate(e)) {
    return
  } else if (e.target.id === 'calendarDate' && checkForDate(e)) {
    roomSelection.disabled = false;
    ccBookings.classList.add('hidden')
    hotel.getAvailRoomsByDate(date)
    displayAvailableRooms()
    availRooms.classList.remove('hidden')
  } else if (e.target.id === 'roomTypes') {
    console.log(e.target.id, 'id', e.target.value, 'value')
    hotel.getAvailRoomsByDate(date)
    hotel.getAvailRoomsByType(e.target.value)
    displayAvailableRooms()
    //<-----Avalable
  }
}

let checkForDate = (e) => {
  if (e.target.value.slice(-10, -6) != '2022' || '2023') {
    dateInputError.classList.remove('hidden')
    return false
  } else {
    return true
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

// function displayAvailableRooms() {
//   availRooms.innerHTML = ''
//
// }




//'rooms', rooms)
function displayAvailableRooms() {
  let rooms = hotel.availableRooms
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
    calendar.max = '2023-12-31'
    calendar.min = moment().format('YYYY-MM-DD')
    calendar.value = moment().format('YYYY-MM-DD');
  });
};
