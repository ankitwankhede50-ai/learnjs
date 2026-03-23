//primitive ( call by value )

//7 types : string , number , boolean , null ,undefined ,symbol ,bigint 

const id =Symbol('123')
const anotherid = Symbol('123')

console.log(id==anotherid)

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

console.log(typeof myFunction)
