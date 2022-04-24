const bookings = fetch("http://localhost:3001/api/v1/bookings")
  .then(response => {
    console.log(response, 'response')
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))

const customers = fetch("http://localhost:3001/api/v1/customers")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))

const rooms = fetch("http://localhost:3001/api/v1/rooms")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))

// const bookingPost = (bookingdata) => fetch("http://localhost:3001/api/v1/bookings", {
// method: "POST",
// body: JSON.stringify({
//   'userID': bookingdata.userID,
//   'date': bookingdata.date,
//   'roomNumber': bookingdata.roomNumber
// }),
// headers: {
//   "Content-Type": "application/json"
// }
// }).then(response => {
//   if (response.ok) {
//     return {
//       message: 'Booking with id <id> successfully posted',
//       newBooking: {
//         id: id,
//         userID: bookingdata.userID,
//         date: bookingdata.date,
//         roomNumber: bookingdata.roomNumber
//       }
//     }
//   }
// } else {
//   throw Error(response.statusText)
// }
// }).catch(err => console.log(err))


export {
  bookings,
  customers,
  rooms
}
