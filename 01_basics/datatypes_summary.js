//primitive ( call by value )

//7 types : string , number , boolean , null ,undefined ,symbol ,bigint 

const id =Symbol('123')
const anotherid = Symbol('123')

//console.log(id==anotherid)

//reference type (non primitive) call by reference

//array,objects,functions 

const heros=["shktiman","naagya"]

let myObj ={
    name:"ankit",
    age:22,
}


const myFunction = function (){
    console.log("hello world");
}

//console.log(typeof myFunction)




//stack(primitve), Heap (non primitive)

let myYtname = "ankitwankhede"

let anotherName = myYtname 

anotherName= "chaiWithCode";

console.log(anotherName)
console.log(myYtname)

let user1 = {
    email :"user12@gmail.com",
    upi : "1234@ybl"
}

let user2 = user1 

user2.email="user2@gmail.com"

console.log(user1.email)
console.log(user2.email)