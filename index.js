// create class for all Vehicles
class Vehicles {
    constructor(name, company, id){
        this.name = name,
        this.company = company,
        this.id = id
    }
}

// create class for cars extends from Vehicles (name, company, id)
class Cars extends Vehicles{
    constructor(name, company, id, type){
        super(name, company, id)
        this.type = type
    }
}

// create class for planes extends from Vehicles (name, company, id)
class Planes extends Vehicles{
    constructor(name, company, id, type){
        super(name, company, id)
        this.type = type
    }
}

// create class for all employee
class Employee {
    constructor(name, birth, id){
        this.name = name,
        this.birth = birth,
        this.id = id
    }
}

// create class for Drivers extends from Employee (name, birth, id)
class Driver extends Employee{
    constructor(name, birth, id, license){
        super(name, birth, id)
        this.license = license
    }
}

// create class for Pilots extends from Employee (name, birth, id)
class Pilot extends Employee{
    constructor(name, birth, id, license){
        super(name, birth, id);
        this.license = license
    }
}

let reservationCount = 0; 

// create class for reservation after a driver or pilot register his/her id and the vehicle id
class reservation {
    constructor(reservationDate, employeeId, vehiclesId, reservationId){
        this.reservationDate = reservationDate,
        this.employeeId = employeeId,
        this.vehiclesId = vehiclesId,
        this.reservationId = reservationId
    }
}

// create examples of vecicle objects
const car1 = new Cars('m4', 'bmw', 2, 'electric');
const car2 = new Cars('wrangler', 'jeep', 2, 'gas');
const car3 = new Cars('camry', 'toyota', 3, 'hybrid');
const plane1 = new Planes('a380', 'airBus', 4, 'jet');
const plane2 = new Planes('777', 'boeing', 5, 'turbo');

// create examples of employee that can be pilot or driver
const employee1 = new Pilot('ibrahim', '1/1/2000', 3011, 111);
const employee2 = new Driver('sami', '1/3/2002', 3021, 112);
const employee3 = new Pilot('faisal', '1/1/2000', 3031, 121);

// create array to store reserved objects
let reserved = []

// function to check if the user is driver and the vehicle is car or the user is pilot and the vehicle is plane if so the reservation will store in reserved array.
const organize = (employeeId, carId) => {
    reservationCount++;
    // to record time 
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;



    if(employeeId.constructor.name === 'Pilot' && carId.constructor.name === 'Planes'){
        let PlaneReservation = new reservation(dateTime, employeeId.id, carId.id, reservationCount)
        reserved.push(PlaneReservation)
        return 'Reservation has successfully registered'
    }else if(employeeId.constructor.name === 'Driver' && carId.constructor.name === 'Cars'){
        let CarReservation = new reservation(dateTime, employeeId.id, carId.id, reservationCount)
        reserved.push(CarReservation)
        return 'Reservation has successfully registered'
    }else{
        return 'THE reservation failed please try again and make sure the information matchs'
    }
}

// to make reservation with employee id and vehicle id 
organize(employee1,plane1);
organize(employee3,plane1);
organize(employee2,car1);
organize(employee2,plane1);

// use map to print the stored data
console.log(reserved.map(reserve => {return reserve}));
