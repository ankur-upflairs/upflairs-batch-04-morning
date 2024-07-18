// let b=45;
//single line comment
/*multiline
comment */
//semicolons are optional
//variable is container that stores a value
//how to declare a variable
//keyword variable_name
//var/let/const 
let a;
//variable_naming rules
//it can contain alphabet,numbers,_(underscore),$(dollar)
let a5;
//can't start with no.
// let 5a; not allowed
//can't use reserve keyword

//datatypes=> primitive and non-primitive(reference type, derived )
//primitive datatypes=>
//1.number =>integer and float
let c=45;
let d=46.7
console.log(typeof c)
//2.string=> collection of character (normal text)
//string can be written in single '' or double qoutes ''
let e='rahul'
let f="pawan"
console.log(typeof e)
//3.boolean => represent a state (true/false)
let g=true
let h=false
console.log(e,typeof g)
//4.bigInt =>
let i=2324534545675787989890n
console.log(typeof i)
//5.symbol
let symbol1=Symbol('a')
console.log(symbol1)
let symbol2=Symbol('a')
console.log(symbol1==symbol2)
console.log(typeof symbol1)

//6.undefined =>when variable is not initialised
let j;
let k=undefined
console.log(typeof j)
//7.null =>
let l=null
console.log(typeof null)

//reference type/derived
// object= > is collection of key/value pair 
//key can be a valid identifier
//value can be any data types including object or function
let person={
    firstName:'pawan',
    lastName:'kumar',
    age:45,
    contact:{
        mob:354545
    },
    fullName :function (){
        return this.firstName + ' ' + this.lastName
    }
}
console.log(person.firstName)
console.log(person.contact.mob)
console.log(person.fullName())















