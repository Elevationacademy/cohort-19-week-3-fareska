/////////////////Closures & Modules-Exercises////////////////////

//////////exercise 1/////////////////////////////////

const StringFormatter = function (){

    // const lowerCaseName = str1.toLowerCase()
	
    const capitalizeFirst = function (str){
       console.log( str.charAt(0).toUpperCase() + str.slice(1) )
        
    }
    const skewerCase =function (str){
        console.log(str.split(" ").join("-").toLowerCase())
    }

    // let str = str1 ;  
    
    // const capitalizeFirst = function (str)  {
    //     if (typeof str !== 'string') return ''
    //     return {str.charAt(0).toUpperCase() + str.slice(1)}
    // }

    // const skewerCase =function (str) {
    //     str && str
    // .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    // .map(x => x.toLowerCase())
    // .join('-');

    // }
    
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase : skewerCase
    }
}

const formatter = StringFormatter()
formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//////////exercise 2///////////////////////////////////////////////////

const bankModule = function () {
    let money = 500;
    
    const depositCash = function (cash) {
      return  money += cash ; 
    }
    
    const checkBalance = function(){
       return console.log(money) ;
    };

    return {
        deposit: depositCash,
        showBalance: checkBalance
    };
}

const bank = bankModule()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


/////////////////////////////
let _memories = ["that time at band camp", "yesterday's breakfast"]
    
const Brain = function(){
    const dayDream = () => _memories
    const experience = memory => _memories.push(memory)
    const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
    const spazz = () => console.log("bleurg")

    return{
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz
    }
}

const brain = Brain()
brain.freakOut()
console.log(brain.freakOut
)





/////////////////Closures & Modules-Material////////////////////

const createPerson = function(name, age){
    const person = {
        personName: name, 
        personAge: age
    }

    return person
}

const person = createPerson("Elon", 42)
console.log(person)
/////////////////

const mathOperations = function(){
    const add = function(x, y){
        return x + y
    }
    return add
}
const math = mathOperations()
console.log(math(1,2))
/////////////////////////

const foo = function () {
    const x = 1
  
    const bar = function () {
      console.log(x) //notice this inner function using the outer function's variable
    }
  
    return bar
  }
  
  const baz = foo() //out here, x doesn't exist
  baz() //but when we invoke baz, we're printing x!
  /////////////////////

  const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()
  increment()
  ////////////////////

const family = function(){
    let members = [];
    
    const birth = (name) => {
        members.push(name);
        console.log(members)
    }
    return birth
}

const giveBirth = family()

giveBirth("Amy")
giveBirth("Yoni")
giveBirth("Yosef")
giveBirth("Avi")

///////////////modules

const mathOperations1 = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
    
}

const m = mathOperations1();

console.log(m.add(13, 29), m.mult(1.75, 24), m.mult(7, m.div(36, 6)) );
// console.log(m.mult(1.75, 24));
// console.log(m.mult(7, m.div(36, 6)))
////////////////////////

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('ahmad')
usersModule.addUser('mohamad')
usersModule.listUsers()
// console.log(userModule.users)

// const as = {
//     name:"ahmad",
//     age: 25
// }

// as.prof 

// console.log(as)
