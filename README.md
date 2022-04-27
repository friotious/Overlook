# What's Cookin' Good Looking?


## Table of Contents
- [About](#about-the-project)
- [Contributors](#contributors)
- [Tech](#technologies-used)
- [Project Board](#organizational-resources)
- [Set Up](#set-up)
- [Operating Instructions](#operating-instructions)
- [App Demo](#application-in-action)
- [Future Goals](#future-goals)
- [Testing](#testing)
- [Extensions Completed](#extensions-completed)


## About

Overlook is a hotel booking app project. TDD was used to test for the multiple class object interactions used in the data model. The app will login a user by userID and display this users bookings. User can then search by date and roomtype for additional rooms to book. This booking will POST to local API and update in DOM.

## Contributors

### [Rio Foster](https://github.com/friotious)
### [Alex Bumpus](https://github.com/Abumpus1)

### Project Manger - Heather Faerber

## Tech

1. JS
2. CSS/HTML
3. Mocha and Chai
4. Webpack
5. NPM

## Project Board

[Overlook Project Board](https://github.com/friotious/Overlook/projects/1)

## Set Up

1. Fork repo, clone copy your local machine.
2. cd into root directory and run npm install, npm start 
4. Local server [GitHub page](https://github.com/turingschool-examples/overlook-api)
5. clone down and npm install, npm start
6. To open the webpage run npm start within root the directory
7. [Overlook Site](http://localhost:8080/)
Once in the application you will see many options. Each step will outline a feature you can use

1. Login page username is customer50, password is overlook2021
2. Main page will display upon login with username, total spent, and info about user's bookings
3. User can select a date which will display available rooms by date
4. User can then select type of room available by specified date
5. Available rooms will display with a booking button
6. Upon booking, new booking data will post to local api and new booking will be updated in data model
7. User can view all updated bookings with button click


## App Demo


## Future Goals

1. Add a manager class to access all customer data, and delete bookings.
2. Add addtional error handling.
3. Add css styling for readability

## Testing

Mocha and chai used in TDD.  All class data model tests were written first.

