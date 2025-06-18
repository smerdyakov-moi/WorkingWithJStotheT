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

    //Alternative to closure
        class Game{
        constructor(name){
            this.name = name,
            this.count = 0
        }
        increase(num){
            this.count+=num
            console.log(`+ ${num} pts.`)
        }
        decrease(num){
            this.count-=num
            console.log(`- ${num} pts.`)
        }
        result(){
            console.log(`You currently have ${this.count} points`)
        }
    }

    let p1 = new Game('Pragyan')
    p1.increase(10)
    p1.increase(20)
    p1.result()
*/
/*Closure understanding
    for(let i = 0;i<3;i++){
    setTimeout(()=>console.log(i),1000)
}
//let creates new i for each iteration, and the state of each i is rememberd by the closure, thus we get the output

for(var i = 0;i<3;i++){
    setTimeout(()=>console.log(i),1000)
}

//var being function scoped, all iterations of i share same value of  3 by the end before the Timeout is completed, thus by the time we reach the callback, we get 3 printed thrice


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
/*
i * 1000 — this part is calculated synchronously, immediately when the loop runs.

setTimeout — schedules the callback asynchronously to run after that delay.*/

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

/* 
    ---- (8) Time Viewer ----
    const clock = document.getElementById('clock')

    function updClock(){
        const now = new Date();
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds =  now.getSeconds()
        const timestring = `${hours}:${minutes}:${seconds}`
        clock.textContent= timestring
    }

    setInterval(updClock,1000)
*/

/* 
    ----(9) StopWatch ----
    const time  = document.getElementById('time')
    const start = document.getElementById('start')
    const reset = document.getElementById('reset')
    const pause = document.getElementById('pause')

    let startTime = 0
    let elapsedTime = 0
    let isRunning = false
    let paused = false

    start.onclick = () => {
        if(!isRunning){
            startTime = Date.now() - elapsedTime
            timer = setInterval(update,10)
            isRunning = true
        }
        if(paused){
            start.textContent = 'Start'
        }
    }

    reset.onclick = () => {
        startTime = 0
        elapsedTime = 0
        isRunning = false
        start.textContent = 'Start'
        time.innerText=`00:00:00:00`
        clearInterval(timer) //for deleting/removing time interval
    }

    pause.onclick = () => {
        isRunning = false
        if(time.innerText !=='00:00:00:00'){ start.textContent = 'Resume'; paused=true}
        clearInterval(timer)
    }

    function update(){
        elapsedTime = Date.now() - startTime
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime/(1000*60)%60)
        let seconds = Math.floor(elapsedTime/1000 % 60)
        let milliseconds = Math.floor(elapsedTime%1000 / 10)

        time.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`
    }
*/

/* Async code
    function f1(callback){
        setTimeout(()=>{callback(),console.log('Done after 3 seconds')},3000)
    }
    display = () =>{
        console.log('Ye')
        console.log('Ye')
        console.log('Ye')
    }
    f1(display)
*/
/* *Genius* take at making classes :
function makeClass(...properties) {
    let array =[...properties]
    return class Animal{
        constructor(...values){
            for(let i = 0;i<array.length;i++){
                this[array[i]]=values[i]
            }
        }
    }
}*/

/*
    (10) ---- Calculator ----
    const display = document.getElementById('display')
    const errorx = document.getElementById('Error')
    error = false

    function addtoDisplay(param){
        if(param==='C'){
            display.value = null
        }else{
            display.value+=param
        }
    }

    function calculate(){
        try{
            errorx.textContent = null
            display.value = eval(display.value)
        }catch(error){
            errorx.textContent = 'Irregular expression'
            console.error(err)
        }
    }
*/

/* Element Selectors
    const fruits = document.getElementsByClassName('fruits')

    Array.from(fruits).forEach(fruit=>{
        fruit.style.backgroundColor='yellow'
    }) //This Array.from is known as typecasting (data type conversion) because the 'fruits' while iterable is not truly an array i.e. we can use
        // for(let fruit of fruits) to change the content
    const h1s = document.getElementsByTagName('h1')
    Array.from(h1s).forEach(h1=>{
        h1.style.color='green'
    })
*/

/* DOM Navigation
    //first/lastElementChild
//const elements  = document.querySelectorAll('ul')
//elements.forEach((element)=>element.lastElementChild.style.backgroundColor='pink')

    //next/prevElementSibling
//const element  = document.getElementById('Food')
//const next = element.nextElementSibling
//next.style.backgroundColor='red'

    //parentElement
//const element = document.getElementById ('k')
//const parent = element.parentElement
//parent.style.backgroundColor='yellow'

    //children
//const element = document.getElementById('Food')
//const children = element.children
//for(let i=0;i<children.length;i++){children[i].style.backgroundColor='green'}

*/
 
/* Adding and Changing HTML
    //Creating,Adding Attributes/Properties, and appending element to DOM
const newp = document.createElement('p')
newp.textContent = 'I like games.'
//let color = window.prompt('Enter your color: ')
newp.style.color = 'red'
document.getElementById('box2').append(newp)


//newp.textContent='seeyuh'
//newp.style.textAlign='center'
//const box2 = document.getElementById('box2')
//document.body.insertBefore(newp,box2)

//Removing a HTML content 

document.getElementById('box2').removeChild(newp)
*/
/* Extras to prev topic
const newlist = document.createElement('li')
newlist.textContent = 'Kiwi'
newlist.style.color = 'red'
newlist.style.backgroundColor='pink'
newlist.id = 'Kiwi'

//document.getElementById('fruits').insertBefore(newlist,document.getElementById('orange')) if we have the id
//Using queryselector for the case where we don't have id

let list = document.querySelectorAll('#veggies li')
console.log(list)
document.getElementById('veggies').insertBefore(newlist,list[2])
*/

/* Event Listener
    const box = document.getElementById('box')
    const button = document.getElementById('clicker')

    button.addEventListener("click",(event)=>{
        box.style.backgroundColor='pink'
        box.textContent='You clicked me!'
        event.target.style.backgroundColor='pink'
        event.target.textContent='You clicked me!'
    })
    button.addEventListener("mouseover",(event)=>{
        box.style.backgroundColor = 'yellow'
        box.textContent='Click'
        event.target.style.backgroundColor = 'yellow'
        event.target.textContent='Click'
    })
    button.addEventListener("mouseout",(event)=>{
        box.textContent='Click Me'
        box.style.backgroundColor="lightblue"
        event.target.textContent='Click Me'
        event.target.style.backgroundColor="lightblue"
    })
*/

/* Key Events - Only fire on elements that can be focused or document<which  listens globally>
const box = document.getElementById('box')
const moveAmount = 20
let [x,y]=[0,0]
 
document.addEventListener('keydown',event=>{
    if(event.key.startsWith('Arrow')){
        event.preventDefault()
        switch(event.key){
            case 'ArrowUp':
                y-=moveAmount
                break;
            case 'ArrowDown':
                y+=moveAmount
                break;
            case 'ArrowLeft':
                x-=moveAmount
                break;
            case 'ArrowRight':
                x+=moveAmount
                break;
        }
    box.style.top= `${y}px`
    box.style.left = `${x}px`
    }
})
*/

/* Hide/Show Element
const btn = document.getElementById('button')
const img = document.getElementsByTagName('img')

btn.addEventListener('click',event=>{
    if(img[0].style.display==='none'){
        img[0].style.display ='block'
        btn.textContent = 'Hide'
    }else{
        btn.textContent = 'Hidden'
        img[0].style.display = 'none'
    }
})
*/

/* NodeList and How We have to Manually Update the nodelist
let buttons = document.querySelectorAll('.mybutton')
//const newbtn = document.createElement('button')
//newbtn.textContent = '5'
//newbtn.classList = 'mybutton'
//document.body.append(newbtn)

//buttons = document.querySelectorAll('.mybutton') //This manual update will only change the nodelist's length to five
//console.log(buttons) //Here the buttons length doesn't change to 5 because nodelists are static and they do not automatically update 

//buttons.forEach(button=>{
  //  button.addEventListener('click',event=>{
    //    event.target.remove()
     //   buttons = document.querySelectorAll('.mybutton')
      //  console.log(buttons)
    //})
//})
*/

/* Class List and their properties
    (PT.1)
const btn = document.getElementById('mybutton')
btn.classList.add('enabled')
btn.addEventListener('mouseover',event=>{
    event.target.classList.add('x')
    btn.classList.add('enabled')
    event.target.textContent = 'Button'
})
btn.addEventListener('mouseout',event=>{
    event.target.classList.remove('x')
    event.target.classList.replace('disabled','enabled')
    event.target.textContent = 'Button'
})
btn,addEventListener('click',event=>{
    event.target.textContent='Clicked'
    event.target.classList.replace('enabled','disabled')
})
   (PT. 2)
let buttons = document.querySelectorAll('.mybutton')
buttons.forEach(button=>{
    button.classList.add('enabled')
    button.addEventListener('mouseover',event=>{
        event.target.classList.toggle('x')
    })
    button.addEventListener('mouseout',event=>{
        event.target.classList.toggle('x')
    })
    button.addEventListener('click',event=>{
        if(event.target.classList.contains('disabled')){
            event.target.classList.replace('disabled','enabled')
        }else{
             event.target.classList.replace('enabled','disabled')
        }
    })
})
    
*/

/* 
    (11) ---- Rock Paper Scissor ----
let choices = ['rock','paper','scissor']

const playerDisplay = document.getElementById('playerdisplay')
const computerDisplay = document.getElementById('computerdisplay')
const resultDisplay = document.getElementById('result')

const win = document.getElementById('wins')
const loss = document.getElementById('losses')
const tie = document.getElementById('ties')



function playGame(userchoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]

    playerDisplay.textContent = `You chose: ${userchoice}`
    computerDisplay.textContent = `Computer chose: ${computerChoice}`

    resultDisplay.classList.remove('greenText', 'redText', 'greyText')

    if (userchoice === computerChoice) {
        tie.textContent = (Number(tie.textContent) + 1).toString()
        resultDisplay.textContent = 'A TIE'
        resultDisplay.classList.add('greyText')
    } else {
        switch (userchoice) {
            case 'rock':
                resultDisplay.textContent = (computerChoice === 'scissor') ? 'YOU WIN' : 'YOU LOSE'
                break
            case 'paper':
                resultDisplay.textContent = (computerChoice === 'rock') ? 'YOU WIN' : 'YOU LOSE'
                break
            case 'scissor':
                resultDisplay.textContent = (computerChoice === 'paper') ? 'YOU WIN' : 'YOU LOSE'
                break
        }

        if (resultDisplay.textContent === 'YOU WIN') {
            win.textContent = (Number(win.textContent) + 1).toString()
            resultDisplay.classList.add('greenText')
        } else {
            loss.textContent = (Number(loss.textContent) + 1).toString()
            resultDisplay.classList.add('redText')
        }
    }
}
*/

/* 
    (12) ---- Image Slider ----
const images = document.querySelectorAll('.slides img')
let index  = 0 
let intervalid  = null

document.addEventListener('DOMContentLoaded',initialize)

function initialize() {
    images[index].classList.add('displayslide')
}

function nextSlide() {
    index++
    showSlide(index)
}

function prevSlide() {
    index--
    showSlide(index)
}

function showSlide(i) {
    if (i < 0) index = images.length - 1
    else if (i >= images.length) index = 0
    else index = i

    images.forEach(image => {
        image.classList.remove('displayslide')
    })

    images[index].classList.add('displayslide')
}
*/

/* Callback Hell
function task1(callback){
    setTimeout(()=>{console.log('Task 1 done.');callback()},2000)
}
function task2(callback){
    setTimeout(()=>{console.log('Task 2 done.');callback()},2000)
}
function task3(callback){
    setTimeout(()=>{console.log('Task 3 done.');callback()},2000)
}
function task4(callback){
    setTimeout(()=>{console.log('Task 4 done.');callback()},2000)
}
function task5(callback){
    setTimeout(()=>{console.log('Task 5 done.');callback()},2000)
}
//Callback HELLLLL
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log('All done')
                })
            })
        })
    })
})
*/

/* Promises
function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkdog = true
            if(walkdog){resolve('Walk the dog')}
            else{reject('Didn\'t walk the dog')}
        },2500)
    })
}
function cleankitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleaned = true
            if(cleaned){resolve('Cleaning Kitchen')}
            else{reject('Didn\'t clean the kitchen')}
        },2000)
    })
}
function takeoutrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const taketrash =false
            if(taketrash){resolve('Taking out trash')}
            else{reject('Didn\'t take out the trash')}
        },2000)
    })
}
    //Method  Chaining
walkdog().then(value=>{console.log(value);return cleankitchen()})
      .then(value=>{console.log(value);return takeoutrash()})
      .then(value=>{console.log(value);console.log('All chores done!')}) 
      .catch(error=>{console.log(error);console.log('Didn\'t complete all the chores')})
*/

/* Async/Await async makes the function return a promise whereas the await makes an async function wait for a promise

function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkdog = false
            if(walkdog){resolve('Walk the dog')}
            else{reject('Didn\'t walk the dog')}
        },2500)
    })
}
function cleankitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleaned = true
            if(cleaned){resolve('Cleaning Kitchen')}
            else{reject('Didn\'t clean the kitchen')}
        },2000)
    })
}
function takeoutrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const taketrash =true
            if(taketrash){resolve('Taking out trash')}
            else{reject('Didn\'t take out the trash')}
        },2000)
    })
}

async function dochores(){
   
    try{
        const walkdogresult = await walkdog()
        console.log(walkdogresult)
         
        const cleankitchenresult = await cleankitchen()
        console.log(cleankitchenresult)
        const takeoutrashresult = await takeoutrash()
        console.log(takeoutrashresult)
    }catch(err){ //this handles when we are not able to resolve a promise and the promises are rejected
        console.error(err)
    }
}
dochores()

*/

/* (13) ---- Basic Movie Search API ----

const apiKey = '4652f9e64079fcd655bf88e973491202'
const h2 = document.createElement('h2')
async function  getData(params) {
    const input = document.getElementById('movie')
    const img = document.getElementById('result')
    try{
      let found = false
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(input.value.trim())}`)
        if (!response.ok) throw new Error(`API responded with error ${response.status}`)
        const value = await response.json()  
        console.log(value)
        value.results.forEach(result => {
            if (result.original_title === input.value.trim()) {
                img.src = `https://image.tmdb.org/t/p/original${result.poster_path}`
                found = true
                input.value = ''
        }
    })
        if (!found) {
            h2.textContent = 'Not found'
            img.style.display='none'
            document.body.append(h2)
        }else{
            h2.textContent=''
            img.style.display = 'block'
                img.style.width = '300px'
                img.style.height = '300px'
        }
    }catch(err){
        console.error(err)
    }
}
*/

