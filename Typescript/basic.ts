const username = "GURUSUDHAN"; //implicitly typing it to string
const age = 21; //implicitly typing it to number
console.log(typeof username, typeof age);

const lowercaseName = username.toLowerCase();
console.log(lowercaseName);

// age.toLowerCase() will show error as type age is number

interface ICar {
    brand: string;
    type: string;
    year: number;
}

// const car : ICar = {
//     brand: "BMW",
//     type: "Sedan",
// }  ------> This shows error as type does not match

// const car : ICar = {
//     brand: "BMW",
//     type: "Sedan",
//     year : "2015",    ------> this also shows error as type of year is number
// }

const cardetails: ICar = {
    brand: "BMW",
    type: "Sedan",
    year: 2015,
};
// console.log(cardetails.name);  ----> Error Property does not exist on ICar
console.log(cardetails.brand);

interface IuserDetail {
    name: string;
    age: number;
}

//Creating a interface for a object
const users: IuserDetail[] = [
    { name: "Gurusudhan", age: 1 },
    { name: "ragul", age: 2 },
];

console.log(users);

const fruit: string[] = ["apple", "orange", "mango"];
const number: number[] = [1, 2, 34, 5];

const dateToday: Date = new Date();
console.log(dateToday.toDateString());
