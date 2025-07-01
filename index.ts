import { info } from 'console';
import promptSync from 'prompt-sync'
const prompt = promptSync()

// Task 1
interface Admin{
    username: string
    pass: number
}
const login: Admin = {
    username: "admin",
    pass: 12345
};

const userPrint = prompt("1) Ваш логін: ")
const passPrint = Number(prompt("Ваш пароль: "))

if(userPrint === login.username && passPrint === login.pass){
    console.log("Вхід успішний!")
}else{
    console.error("Доступ заборонено!")
}

// Task 2
const numberPrint = Number(prompt("2) Введіть число: "))

if(numberPrint % 2 === 0){
    console.log(`${numberPrint} парне число!`)
}else{
    console.log(`${numberPrint} непарне число!`)
}

// Task 3
const currentDate = new Date()
const year = currentDate.getFullYear()

const datePrint = Number(prompt("3) Введіть ваш рік народження: "))
const checkYear =  year - datePrint
if(datePrint >= 1900){
    if (checkYear < 18){
        console.error("Доступ обмежений!")
    }else if(checkYear >= 18){
        console.log("Доступ дозволений!")
    }else{
        console.error()
    }
}else{
    console.error("Помилка!")
}


// Task 4
//Загальна_вартість= Ціна + Ціна * (Податок / 100)
let cost:number = 800
let tax:number = 10

let allSum:number = cost + cost * (tax / 100)
console.log(`4) Загальна сума ${allSum} грн`)

// task 5
let a:number = 90
let b:number = 70
let c:number = 50
let f:number = 0

const ratingPrint = Number(prompt("5) Введіть вашу оцінку(0-100): "))

if(ratingPrint < 50){
    f = ratingPrint
    //console.log(f)
}else if(ratingPrint >= 50 && ratingPrint <= 69){
    c = ratingPrint
    //console.log(c)
}else if(ratingPrint >= 70 && ratingPrint <= 89){
    b = ratingPrint
    //console.log(b)
}else if(ratingPrint >= 90 && ratingPrint <= 100){
    a = ratingPrint
    //console.log(a)
}else{
    console.error("Невірні дані!")
}

switch(ratingPrint){
    case a:
        console.log("Ваша оцінка: A")
        break
    case b: 
        console.log("Ваша оцінка: B")
        break
    case c:
        console.log("Ваша оцінка: C")
        break
    case f:
        console.log("Ваша оцінка: F")
        break
    default:
        console.error("Неможливе вирахування оцінки, невірні дані!");
        break
}


// Task 6
const number2Print = Number(prompt("6) Введіть число, щоб дізнатися чи є в ньому цифра 3: "))
if(number2Print < Number.MAX_SAFE_INTEGER){
    const transformation = number2Print.toString();
    console.log(transformation.includes("3"));
}else{
    console.error("Дуже велике число!")
}


// Task 7
const number3Print = Number(prompt("7) Введіть число: "))
if(number3Print % 3 === 0 && number3Print % 5 === 0){
    console.log(`Число ${number3Print} ділиться на 3 та 5`)
}else if(number3Print % 5 === 0){
    console.log(`Число ${number3Print} ділиться на 5`)
}else if(number3Print % 3 === 0){
    console.log(`Число ${number3Print} ділиться на 3`)
}else{
    console.log(`Число ${number3Print} не ділиться на 3 та 5`)
}