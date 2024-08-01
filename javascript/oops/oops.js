// class Person{
//     constructor(name,salary){
//         this.name=name
//         this.salary=salary
//     }    
//     display(){
//         console.log(`name- ${this.name} and salary - ${this.salary}`)
//     }
// }

// let sunil=new Person('sunil',25000)

// sunil.display()
// console.log(Person)
// console.log(sunil.salary)

//calculator

class Animal{
    constructor(legs,eyeColor){
        this.legs=legs
        this.eyeColor=eyeColor
    }
    display(){
        console.log(`legs- ${this.legs} and eyeColor- ${this.eyeColor}`)
    }
    sound(){
        console.log(`animal makes a sound....`)
    }
}

let animal1=new Animal(4,'black')
// animal1.display()

class Dog extends Animal{
    static count=0
    constructor(legs,eyeColor,breed){
        Dog.count++
        super(legs,eyeColor)
        this.breed=breed
        
    }
    sound(){
        console.log(`dog barks...`)
    }
    get getBreed(){
        return this.breed
    }
    set bodyColor(color){
        if(color=='black') throw Error('black is not allowed')
        this._bodyColor=color
    }
}

let lebra=new Dog(4,'brown','lebra')
let pitbull= new Dog(4,'blue','pitbull')
lebra.display()
lebra.sound()
console.log(Dog.count)
console.log(lebra.getBreed)
lebra.bodyColor='black'
console.log(lebra._bodyColor)







