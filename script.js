/*  
    ----(1)Button onclick to change the text appearing on the HTML---- 
        let names=''

        document.getElementById('name-submit').onclick = function(){
            console.log('Gamesssss')   
            names = document.getElementById('name').value //While accepting values from input, we have to make sure it's .value and not .innerHTML or otherwise
            document.getElementById('greeting').innerText=`Good Morning, ${names}`
        }

        let age = window.prompt('Your age: ')
        console.log(Number(age)+1,typeof age)
*/

/*
    ----(2)Counter program----
    const decreasebtn =  document.getElementById("decrease")
    const increasebtn = document.getElementById("increase")
    const resetbtn = document.getElementById("reset")

    increasebtn.onclick = function(){
        document.getElementById('count').innerText=Number(document.getElementById('count').innerText)+1
    }

    decreasebtn.onclick = function(){
        document.getElementById('count').innerText=Number(document.getElementById('count').innerText)-1
    }

    resetbtn.onclick = function(){
        document.getElementById('count').innerText=0
    }
*/

/*
    Note: .checked is a property in JS that determines the checked state of an  HTML checkbox or a radio button element
    ----(3) Radio and checboxes ----
    const mycheckbox = document.getElementById('mycheckbox')

    const visabtn = document.getElementById('visabtn')
    const bankbtn = document.getElementById('bankbtn')
    const cardbtn = document.getElementById('cardbtn')
    const submitbtn = document.getElementById('submit')

    const result1 = document.getElementById('heroresult')
    const result2 = document.getElementById('paymentresult')


    submitbtn.onclick = function(){
        if(mycheckbox.checked){
            result1.textContent = 'You are a hero maga'
        }else{
            result1.textContent = 'Bugger'
        }

        if(visabtn.checked){
            result2.textContent = 'Paying with VISA dei'
        } else if (bankbtn.checked){
            result2.textContent = 'Paying with bank details'
        }else if (cardbtn.checked){
            result2.textContent = 'Paying with card eh'
        }else{
            result2.textContent = 'We need payment details fuche'
        }
    }
*/
  
/*
    ----(4)Number Guessing Game---
    let exec = true
    let attempts = 0

    const minNum = 1
    const maxNum = 50
    const correct = Math.floor(Math.random()*(maxNum-minNum+1))+minNum
    console.log(correct)
    let namex = window.prompt('Ennter your name: ')    
    while(exec){
        
        let number = window.prompt("Enter a number: ")
        number = Number(number)

        if(isNaN(number)){
            window.alert('Invalid number')
        }
        else if(number<minNum || number>maxNum){
            window.alert('Please enter a number in the valid range from 1 to 50.')
        }
        else{
            attempts+=1
            if(number<correct){
                window.alert("Too low. Try again")
            }else if (number>correct){
                window.alert("Too high. Try again")
            }else{
                window.alert(`Correct, ${namex} The number was ${correct}. It took you ${attempts} attempts`)
                document.getElementById('hi').innerText=`Welcome ${namex}`
                exec = false
            }
        }
    }
*/

/*
    ----(5) Temps convert program ----
    let button = document.getElementById('submit')
    let ftocradio = document.getElementById('FtoC')
    let ctofradio = document.getElementById('CtoF')
    let result = document.getElementById('result')

    button.onclick = () =>{
        let temperature = Number(document.getElementById('temperature').value)
        if(ftocradio.checked){
            result.textContent = ((temperature-32)*5/9).toFixed(2).toString() + ' Celsius'
        }else if (ctofradio.checked){
            result.textContent = ((9/5*temperature)+32).toFixed(2).toString() +' Fahrenheit'
        }else{
            result.textContent = 'Please select a conversion'
        }
    }
*/

/*
    ----(6) Dice Roller ----
    const button = document.getElementById('roll')
    button.onclick = () =>{
    const numofdice = document.getElementById('no-dice').value
    const diceresult = document.getElementById('diceresult')
    const diceimages = document.getElementById('diceimages')
    const values = []
    const images =[]
    for(let i = 0 ; i< numofdice;i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value)
        images.push(`<img src="dices/${value}.png" alt = "Dice: ${value}">`)
    }

    diceresults.textContent = `dice: ${values.join(',')}`
    diceimages.innerHTML = images.join('')
}
*/

/* Callback function in action:

    let items = ['Hell','Give','It','To']
    items.forEach(upper) calls to upper function
    items.forEach(display)

    function upper (element,index,array){
        array[index] = element.toUpperCase()
    }

    function display(element){
        console.log(element)
    }
*/
/*this keyword
        const person1 = {
        name: 'Pragyan',
        favFood: ['Dal Bhaat','Pizza','Chicken','Fish'],
        sayhello: function(){this.favFood.forEach((element)=>console.log(`${this.name} loves ${element}`))}
    }
    person1.sayhello()
*/
/*Constructor
    function car(name,year,model,color){
        this.name = name,
        this.year = year,
        this.model = model,
        this.color = color,
        this.drive = function(){console.log(`I am driving a ${this.color} ${this.name}`)}
    }

    const car1 = new car('Mercedes',2004,'Y56','Black')
    const car2 = new car('Ferrari',2004,'Y16','Red')
    const car3 = new car('McLaren',2004,'Y66','Orange')

    car3.drive()
*/
/* Class
    class Product{
        constructor(name,price){
            this.name  = name,
            this.price = price
        } // for setting up the params
         //Don't explicitly mention 'function' keyword under Class
        display(){
            console.log(`You have ${this.name} at your hands. It will cost you ${this.price}`)
        }
        calculateTotal(taxes){
            console.log(`The total cost  for ${this.name} with taxes is ${this.price + this.price*taxes}`)
        }
    }

    const taxes = 0.03

    const obj1 = new Product('VT56',101)
    const obj2 =  new Product('Glock',140)
    obj1.calculateTotal(taxes)
    obj2.calculateTotal(taxes)
*/
/*Static
    class User{
    static count = 0;
    constructor(name){
        this.name = name
        User.count+=1
    }
    static users(){
        console.log(`There are currently ${User.count} users`)
    }
}

    let user1= new User('A')
    let user2= new User('B')
    let user3= new User('C')

    User.users()
*/
/* Inheritance
    class Animal{
        alive = true
        eat(){
            console.log(`This ${this.name} is sewey`)
        }
    }

    class Rabbit extends Animal{
        name = "rabbixt"
    }
    class Fish extends Animal{
        name = "Fish"
    }

    const rab1 = new Rabbit()
    const rab2 = new Rabbit()
    const fish1 = new Fish()

    rab2.eat()
*/
/* Super keyword - Used for code reusability, properties shared amongst children in common does not need to be repeated

    class Animal{
        constructor(name,age,speed){
            this.name = name
            this.age = age
            this.speed = speed
        }
        move(speed){
            console.log(`${this.name} moves at ${this.speed} km/h`)
        }
    }

    class Rabbit extends Animal{
        constructor (name,age,speed){
            super(name,age,speed)
            
        }
        run(){
            super.move(this.speed)
        }
    }
    class Fish extends Animal{
        constructor(name,age,speed){
            super(name,age,speed)
        }
        swim(){
            super.move(this.speed)
        }
    }

    const rab1 = new Rabbit("Dave",12,35)
    const rab2 = new Rabbit("Shayla",9,40)

    const fish1 =  new Fish("Kronos",12,56)
    const fish2 =  new Fish("Div",8,1000)
    fish1.swim()
    rab2.run()
*/
/* Setters & Getters
    class Rectangle{
        constructor (length,breadth){
            this.length = length
            this.breadth = breadth
        }

        set length (newlength){
            if(newlength<=0){
                console.error('Invalid')
            }else{
                this._length = newlength
            }
        }
        set breadth (newbreadth){
            if(newbreadth<=0){
                console.error('Invalid')
            }else{
                this._breadth = newbreadth
            }
        }
        get length(){
            return this._length
        }
        get breadth(){
            return this._breadth
        }
    }

    let r1 = new Rectangle(12,13)
    console.log(r1.length) 
*/
/* Nested Objects with Class
    class Address{
        constructor (city,country){
            this.city = city
            this.country = country
        }
    }

    class Person{
        constructor(name,...address){
            this.name=name
            this.address = new Address(...address)
        }
    }

    let p1  =  new Person("Pragyan","GK","NP")
    console.log(p1.address.country)
*/
/* Closure -  For state maintenance, function defined inside another function
    function Game(){
        let score = 0
        function increaseScore(points){
            score += points
            console.log(`+ ${points} points`)
        }
        function decreaseScore(points){
            score-=points
            console.log(`- ${points} points`)
        }
        function currentScore(){
            return score
        }
        return {increaseScore,decreaseScore,currentScore}
    }

    let game = Game()
    game.increaseScore(20)
    game.decreaseScore(20)
    game.increaseScore(45)
    game.increaseScore(60)

    console.log(`The current score is ${game.currentScore()}`) //Because we can not access the store variable as it is private
*/

/* 
    (7) ----setTimeout functionality ----
    const prompt = document.getElementById('prompt')
    const clear = document.getElementById('clear')

    let timeoutid;

    prompt.onclick = () =>{
        timeoutid = setTimeout(()=>{window.alert('Surprise')},3000)
        console.log('Begun')
    }
    clear.onclick = () =>{
        clearTimeout(timeoutid)
        console.log('Interrupted')
    }
*/

