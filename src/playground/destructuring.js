//OBJECT DESTRUCTURING
const person = {
    name: 'Octav',
    age: 26,
    location: {
        city: 'London',
        temp: 15
    }
};

console.log(`${person.name} is ${person.age}.`);

// destructuring + default value Anonymous
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}.`);

//another ex
const {city, temp} = person.location;
if (city && temp) {
    console.log(`It's ${temp} in ${city}`);
}

//renaming
const {city: citee, temp: temperature} = person.location;
if (citee && temperature) {
    console.log(`It's ${temperature} in ${citee}`);
}

//default value + renaming
const {name: firstname = 'Anonymous', age: years} = person;
console.log(`${firstname} is ${years}.`);


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Bryan',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName='Self-pubished'} = book.publisher;
console.log(publisherName);


//ARRAY DESTRUCTURING

const address = ['3-5 Avenue Road', 'London', 'UK', 'N65DS'];
console.log(`You are in ${address[1]} ${address[2]}`);


const [street, town, state = 'Nowhere', zip] = address;
// const [, , state] = address; -> will only destructure state
console.log(`You are in ${town} ${state}`);
//doesn't have renaming as the names are choosen in const

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
const [drink,,mediumPrice] = item;
console.log (`A medium ${drink} costs ${mediumPrice}`);

console.log("==========");

const someObject = {
    a: 'red',
    b: 30,
    c: 'square'
}

const doSmth = ({a: color, b: size=1, c: shape}={}) => {
    return (
        `This shit is ${color} and has ${size} cm. It's also ${shape}`
    )
}
console.log(doSmth(someObject));