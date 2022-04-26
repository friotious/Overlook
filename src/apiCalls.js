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

const addActivity = (newActivity) => {
  fetch("http://localhost:3001/api/v1/activity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newActivity),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Please make sure that all fields are filled out");
      } else {
        return response.json();
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.message === "Failed to fetch") {
        return (errorTag.innerText = "OOPS SORRY something went wrong");
      } else {
        return (errorTag.innerText = error.message);
      }
    });
};

const bookingPost = (id, date, roomNumber) => fetch("http://localhost:3001/api/v1/bookings", {
method: "POST",
body: JSON.stringify({
  'userID': parseInt(id),
  'date': date,
  'roomNumber': parseInt(roomNumber)
}),
headers: { "Content-Type": "application/json" }
}).then(response => {
  if (response.ok) {
    return response.json()
    }
    else {
  throw Error(response.statusText)
}}).catch(err => console.log(err))


export {
  bookings,
  customers,
  rooms,
  bookingPost
}
