const bookings = () => {
  return fetch("http://localhost:3001/api/v1/bookings")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))
}

const customers = () => {
  return fetch("http://localhost:3001/api/v1/customers")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))
}

const rooms = () => {
  return fetch("http://localhost:3001/api/v1/rooms")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw Error(response.statusText)
    }
  }).then(data => data)
  .catch(err => console.log(err))
}
const bookingPost = (id, date, roomNumber) => fetch("http://localhost:3001/api/v1/bookings", {
      method: "POST",
      body: JSON.stringify({
        'userID': id,
        'date': date,
        'roomNumber': roomNumber
      }),
      headers: {
        "Content-Type": "application/json"
      }
      }).then(response => {
        if (response.ok) {
          return response.json()
          }
        }
      } else {
        throw Error(response.statusText)
      }
      }).catch(err => console.log(err))


export {
  bookings,
  customers,
  rooms,
  bookingPost
}
