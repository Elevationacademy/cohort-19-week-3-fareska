/////////////////////////////////////Call back and Arrow func- Exercises///////////////////////////////////

//////////////exercise 1

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }

const pushPull = (func) => func()  

  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"
  

  //////////////exercise 2

const returnTime = function (time) {
   
    alert('The current time is: ' + time)
  }

 const getTime = (func) =>  func(new Date());

  getTime(returnTime)

////////////////  Exercise 3

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  const logData = (param) => console.log(param) 
  displayData(alert, logData, "I like to party")


  //////////////  Exercise 4

const sum = (a, b, c) => a+b+c

////////////////  Exercise 5

const capitalize = string =>  console.log( string.toLowerCase().charAt(0).toUpperCase()+string.toLowerCase().slice(1))
//     let lowerCase = string.toLowerCase();
//     let proper =  lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
//     return proper
// }   
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

////////////////  Exercise 6

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = temp => console.log( "it's "+ determineWeather(temp) )

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

////////////////  Exercise 7

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")







/////////////////////////////////////Call back and Arrow func- Material///////////////////////////////////
// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()
////////////  spot check 2
// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         displayData()
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

////////////

// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()

/////////////

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument
/////////////////// spot check 3

// const timer = function(){
//     console.log(new Date())
//   }

//   setInterval(timer, 1000)


  
//   setInterval(function(){
//       console.log(new Date())
//   }, 1000)

////////////

// const square = a => console.log(a*a);

// square(4)

////////////spot check 5

// const getFormalTitle = (title, name) => title+ " " +name
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

///////// this

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             ﻿console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()