//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let User1= new User(1, 'lol','kek','lolkek@gmail.com','=380991017370')
let User2= new User(2,'lolita','kektra','lolitakektra@gmail.com','=380991016543')
let User3= new User(3,'lili','kok','lolkek@gmail.com','=380997657370')
let User4= new User(4,'lolo','kik','lolkek@gmail.com','=380998457370')
let User5= new User(5,'lolia','kyk','lolkek@gmail.com','=380991017370')
let User6= new User(6,'lilia','kak','lolkek@gmail.com','=380991017370')
let User7= new User(7,'logo','kuk','lolkek@gmail.com','=380991017370')
let User8= new User(8,'logotip','kkk','lolkek@gmail.com','=380991017370')
let User9= new User(9,'lcn','kfc','lolkek@gmail.com','=380991017370')
let User10= new User(10,'Kolia','kot','lolkek@gmail.com','=380991017370')
let arrUser=[User1,User2,User3,User4,User5,User6,User7,User8,User9,User10]
console.log(arrUser)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arrUser.filter(user=>user.id%2===0))
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrUser.sort((user1,user2) => user1.id-user2.id))
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id=id
        this.name=name
        this.surname=surname
        this.email=email
        this.phone=phone
        this.order=order
    }
}
let Client1= new Client(1, 'lol','kek','lolkek@gmail.com','=380991017370',['milk'])
let Client2= new Client(2,'lolita','kektra','lolitakektra@gmail.com','=380991016543',['hell','arr'])
let Client3= new Client(3,'lili','kok','lolkek@gmail.com','=380997657370',['jjj','dask','sjf'])
let Client4= new Client(4,'lolo','kik','lolkek@gmail.com','=380998457370',['hhh','tgdh','ooo'])
let Client5= new Client(5,'lolia','kyk','lolkek@gmail.com','=380991017370',['kkk','tgdh','alk','fa','k'])
let Client6= new Client(6,'lilia','kak','lolkek@gmail.com','=380991017370',['lll','tgdh'])
let Client7= new Client(7,'logo','kuk','lolkek@gmail.com','=380991017370',['jjk','tgdh','ak'])
let Client8= new Client(8,'logotip','kkk','lolkek@gmail.com','=380991017370',['aaa','tgdh'])
let Client9= new Client(9,'lcn','kfc','lolkek@gmail.com','=380991017370',['sss','tgdh','jja'])
let Client10= new Client(10,'Kolia','kot','lolkek@gmail.com','=380991017370',['ddd'])
let arrClients=[Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client9,Client10]
console.log(arrClients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arrClients.sort((user1,user2)=>user1.order.length-user2.order.length))
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Carfun(model,creater,year,maxSpeed,V){
    this.model=model
    this.creater=creater
    this.year=year
    this.maxSpeed=maxSpeed
    this.V=V

    this.drive= function ()  {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    this.info=function (){console.log(`model: ${this.model} -- модель, creater: ${this.creater}--виробник, year: ${this.year}--рік випуску, maxSpeed:${this.maxSpeed}--максимальна швидкість , V: ${this.V} -- об'єм двигуна `)}
    this.increaseMaxSpeed=function (newSpeed){
        if(newSpeed>this.maxSpeed){
        this.maxSpeed=newSpeed
            console.log(this)
    }}
    this.changeYear=function (newValue){
        this.year=newValue
        console.log(this)
    }
    this.addDriver=function (obj){
        this.driver={}
            this.driver = obj;
        console.log(this)
    }
}
car1= new Carfun('BMV',"Kkk",2000,287,100)
console.log(car1)
car1.drive()
car1.info()
car1.changeYear(1999)
car1.increaseMaxSpeed(350)
car1.addDriver({name:'Petia',year:22,class:'A'})
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor(model,creater,year,maxSpeed,V) {
        this.model=model
        this.creater=creater
        this.year=year
        this.maxSpeed=maxSpeed
        this.V=V
    }
    drivee()  {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    infoo (){console.log(`model: ${this.model} -- модель, creater: ${this.creater}--виробник, year: ${this.year}--рік випуску, maxSpeed:${this.maxSpeed}--максимальна швидкість , V: ${this.V} -- об'єм двигуна `)}
    increaseMaxSpeedd (newSpeed){
        if(newSpeed>this.maxSpeed){
            this.maxSpeed=newSpeed
            console.log(this)
        }}
    changeYearr (newValue){
        this.year=newValue
        console.log(this)
    }
    addDriverr(obj){
        this.driver={}
        this.driver = obj;
        console.log(this)
    }

}

car2=new Car('BMV',"LLL",2020,350,150)
console.log(car2)
car2.drivee()
car2.infoo()
car2.changeYearr(2017)
car2.increaseMaxSpeedd(450)
car2.addDriverr({name:'Vasia',year:28,class:'B'})
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Popeliyshka(name,year,size){
    this.name=name;
    this.year=year;
    this.size=size;
}
let Girl1 = new Popeliyshka('Katia',18,38)
let Girl2 = new Popeliyshka('Nadia',22,40)
let Girl3 =new Popeliyshka('Fadia',24,41)
let Girl4 =new Popeliyshka('Ladia',21,42)
let Girl5 =new Popeliyshka('Padia',20,39)
let Girl6 =new Popeliyshka('Tata',19,37)
let Girl7 =new Popeliyshka('Tatia',40,35)
let Girl8 =new Popeliyshka('Kadia',29,36)
let Girl9 =new Popeliyshka('Kokos',28,43)
let Girl10 =new Popeliyshka('Lore',26,34)
let arrPopel=[Girl1,Girl2,Girl3,Girl4,Girl5,Girl6,Girl7,Girl8,Girl9,Girl10]
console.log(arrPopel)
let prinz={name:'Oleg',age:23,sizeF:34}
console.log(arrPopel.find(people=>people.size===prinz.sizeF))
    for (const person of arrPopel) {
        if(person.size===prinz.sizeF){
            console.log(person)
        }
    }
