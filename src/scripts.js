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

//<-----QUERY SELECTORS-------------------------->///////////
let nav = document.querySelector('.nav')
let main = document.querySelector('.main')
//-------LOGIN QUERY SELECTORS-------------------------->///////////
let loginScreen = document.querySelector('.login-screen')
let loginMessage = document.querySelector('.login-message')
let loginError = document.querySelector('.login-error-message')
let usernameInput = document.querySelector('.username-input')
let passwordInput = document.querySelector('.password-input')
let loginButton = document.querySelector('.submit-login-button')
//-------CUSTOMER DATA QUERY SELECTORS-------------------------->///////////
let userName = document.getElementById('userName')
let spent = document.getElementById('totalSpent')
let ccBookings = document.getElementById('customerBookingsData')
//-------FILTER ROOMS QUERY SELECTORS-------------------------->///////////
let availRooms = document.getElementById('availableRoomsPage')
let calendarBox = document.getElementById('calendarBox')
let calendar = document.getElementById('calendarDate')
let submitButton = document.getElementById('submitButton')
let roomDateInputBox = document.getElementById('roomDateInputBox')
let dateInputError = document.getElementById('dateInputError')
let roomSelection = document.getElementById("roomTypes")
//-------AVAILABLE ROOMS QUERY SELECTORS-------------------------->///////////
let availableRoomsPage = document.getElementById("availableRoomsPage")
let showBookingsButton = document.getElementById("showBookingsButton")
let noRoomsError = document.getElementById("noRoomsError")
let hotel
let customer


//<-----> EVENT LISTENERS <-------------------------->///////////
window.addEventListener('load', () => {
  Promise.all([bookings(), rooms(), customers()]).then((values) => {
    hotel = new Hotel(values[0].bookings, values[1].rooms, values[2].customers)
    hotel.addRoom()
    hotel.addBookings()
  })
});

passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
  loginButton.click()
}
})

loginButton.addEventListener('click', (e) => {
  show(loginMessage)
  hide(loginError)
  checkLogin(usernameInput.value, passwordInput.value)
})

availableRoomsPage.addEventListener('click', (e) => {
  e.target.disabled = true
  let date = moment(calendar.value).format('YYYY/MM/DD')
  if (e.target.type === 'submit') {
    makeBooking(customer.id, e.target.dataset.date, e.target.id)
    displayAvailableRooms()
  }
})

roomDateInputBox.addEventListener('input', (e) => {
  displayFormInput(e)
})

showBookingsButton.addEventListener('click', (e) => {
  updateAll()
  show(ccBookings)
  hide(availRooms)
  hide(noRoomsError)
})

const checkLogin = (name, password) => {
  let userID = name.split('r')[1]
  console.log(name, 'name', password, 'password', userID, 'ID')
  if (name.includes('customer') && hotel.checkID(userID) && password === 'overlook2021') {
    hotel.addCurrentCustomer(userID)
    customer = hotel.currentCustomer
    updateAll()
    displayMain()
    hide(loginError)
  } else {
    show(loginError)
    hide(loginMessage)
  }
}

const checkVacancy = () => {
  if (!hotel.availableRooms[0]) {
    show(noRoomsError)
    hide(ccBookings)
    hide(availRooms)
  } else {
    hide(noRoomsError)
  }
}

////<---------> DISPLAY ON PAGE <-------------------------->//////
const displayUserName = () => userName.innerText = customer.name

const displaySpent = () => spent.innerText = `Total Spent: $${customer.calculateTotalSpent()}`

//-display current customers bookings past/future----////

const displayCCBookings = () => {
  let past = customer.getPastBookings()
  let future = customer.getFutureBookings()
  ccBookings.innerHTML = ''
  past.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="past-booking-card" tabindex=0>
        <ul>You Stayed here on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.roomNumber}</ul>
        <ul>${booking.getBed()}</ul>
      </div>`
  })
  future.forEach(booking => {
    ccBookings.innerHTML +=
      `<div class="future-booking-card" tabindex=0>
        <ul>You're booked on ${booking.date}</ul>
        <ul>in room #${booking.roomNumber}</ul>
        <ul>${booking.roomNumber}</ul>
        <ul>${booking.getBed()}</ul>
    </div>`
  })
}

//------- display rooms filtered by date/type from aside-form---------//

const displayFormInput = (e) => {
  let date = moment(calendar.value).format('YYYY/MM/DD')
  if (e.target.id === 'calendarDate') {
    roomSelection.disabled = false;
    hide(ccBookings)
    displayRooms()
    show(availRooms)
  } else if (e.target.id === 'roomTypes') {
    displayRooms()
  }
}

//---------- display Room cards ----------//

const displayAvailableRooms = () => {
  checkVacancy()
  let rooms = hotel.availableRooms
  let date = moment(calendar.value).format('YYYY/MM/DD')
  availRooms.innerHTML = ''
  rooms.forEach(room => {
    availRooms.innerHTML +=
      `<div id='${room.number}' class="available-rooms-card" tabindex=0>
        <ul>Rooms avilable on ${date}</ul>
        <ul>Room #${room.number} - ${capitalize(room.roomType)}</ul>
        <ul>Bidet: ${room.bidet ? 'Yes' : 'sorry, no' }
        <ul>Beds: ${room.numBeds} </ul>
        <ul>Bed size: ${capitalize(room.bedSize)}</ul>
        <ul>Cost: $${room.costPerNight}</ul>
        <button class="book-button" id='${room.number}' data-date="${date}" tabindex=0>Book</button>
      </div>`
  })
}

//---------POST method ---------------//

const makeBooking = (id, date, roomNumber) => {
  bookingPost(id, date, roomNumber).then(response => {
    if (!response.newBooking) {
      console.log(response)
    }
  }).then(() => {
    return bookings().then(data => {
      let output = hotel.saveBookings(data.bookings)
      hotel.allBookings = output
      hotel.addRoom()
      hotel.addBookings()
      displayRooms()
    })
  })

}

//<----- HELPER METHODS -------------------------->///////////

const hide = (element) => element.classList.add('hidden')

const show = (element) => element.classList.remove('hidden')

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const resetInputs = () => {
  calendar.min = moment().format('YYYY-MM-DD')
  calendar.value = moment().format('YYYY-MM-DD')
  roomSelection.value = "Choose a roomtype"
}

const displayRooms = () => {
  let date = moment(calendar.value).format('YYYY/MM/DD')
  hotel.getAvailRoomsByDate(date)
  hotel.getAvailRoomsByType(roomSelection.value)
  displayAvailableRooms()
}

const updateAll = () => {
  customer.sortBookings()
  displayCCBookings()
  displayUserName()
  displaySpent()
  resetInputs()
}

const displayLogin = () => {
  show(loginMessage)
  hide(loginError)
  show(loginScreen)
  hide(nav)
  hide(main)
}

const displayMain = () => {
  show(main)
  show(nav)
  hide(loginScreen)
}
