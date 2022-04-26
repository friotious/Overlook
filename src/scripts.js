//<--------IMPORTS--------------------------->/////////
import './css/styles.css';
import {
  bookings,
  customers,
  rooms,
  bookingPost
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
let ccBookings = document.getElementById('customerBookingsData')
let availRooms = document.getElementById('availableRoomsData')
let calendarBox = document.getElementById('calendarBox')
let calendar = document.getElementById('calendarDate')
let submitButton = document.getElementById('submitButton')
let roomInputBox = document.getElementById('roomInputBox')
let dateInputError = document.getElementById('dateInputError')
let roomSelection = document.getElementById("roomTypes")
let availableRoomsPage = document.getElementById("availableRoomsPage")
let hotel
let customer

function displayUserName() {
  userName.innerText = customer.name
}

function displaySpent() {
  spent.innerText = customer.calculateTotalSpent()
}

function displayCCBookings() {
  let past = customer.getPastBookings()
  let future = customer.getFutureBookings()
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


// const newBooking = {
//   userID: customer.id,
//   date: calendarDate.value,
//   roomNumber: e.target.id
// }
  .replaceAll("-", "/")

event.closest()

availableRoomsPage.addEventListener('click', (e) => {
  if (event.target.type === 'button') {
  makeBooking(customer.id, e.target.dataset.date, e.target.id)
}
})

let makeBooking(id, date, roomNumber) {
  Promise.all([bookingPost(id, date, roomNumber)]).then(response => {
    console.log(response, 'response')
    {
    message: 'message',
    newBooking: {
      id: ';aowkgh;osndv',
      date: '22/222/2222',
      roomNumber: 22
    }
    // response[0].newBooking
  })
}

const hide = (element) => element.classList.add('hidden')

const show = (element) => element.classList.remove('hidden')


roomInputBox.addEventListener('input', (e) => {
  dateInputError.classList.add('hidden')
  filterFormInput(e)
})

filterFormInput = (e) => {
  let date = moment(calendar.value).format('YYYY/MM/DD')
  if (e.target.id === 'calendarDate') {
    roomSelection.disabled = false;
    ccBookings.classList.add('hidden')
    hotel.getAvailRoomsByDate(date)
    displayAvailableRooms()
    availRooms.classList.remove('hidden')
  } else if (e.target.id === 'roomTypes') {
    hotel.getAvailRoomsByDate(date)
    hotel.getAvailRoomsByType(e.target.value)
    displayAvailableRooms()
    //<-----Avalable
  }
}



function displayAvailableRooms() {
  let rooms = hotel.availableRooms
  availRooms.innerHTML = ''
  rooms.forEach(room => {

    availRooms.innerHTML +=
      `<div id='${room.number}'>
        <p>Rooms avilable on ${calendarDate.value}</p>
        <ul>Room #${room.number} - ${capitalize(room.roomType)}</ul>
        <ul>Bidet: ${room.bidet ? 'Yes' : 'sorry, no' }
        <ul>Beds: ${room.numBeds} </ul>
        <ul>Bed size: ${capitalize(room.bedSize)}</ul>
        <ul>Cost: $${room.costPerNight}</ul>
        <button id='${room.number}' data-date="${calendarDate.value}">Book</button>
      </div>`
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
