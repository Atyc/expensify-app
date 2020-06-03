import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCj62bjI0Il1iPR7EAdufyFjaEEMuc8nko",
    authDomain: "expensify-eb7a8.firebaseapp.com",
    databaseURL: "https://expensify-eb7a8.firebaseio.com",
    projectId: "expensify-eb7a8",
    storageBucket: "expensify-eb7a8.appspot.com",
    messagingSenderId: "171264589457",
    appId: "1:171264589457:web:06f8d4afd0e6d5e8048930"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


//child removed - subscriber
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

//child changed - subscriber
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

//child added - subscriber
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})
/*
//Firebase doesn't work with arrays, use push to create lists

database.ref('expenses').push({
    description: 'Rent',
    note: 'Too expensive',
    amount: '1250',
    createdAt: 15678645120
});
*/

//read data

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()

            });
        });
        console.log(expenses)
    }).catch ((e) => {
        console.log('Something went wrong', e)
    });

database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((child) => {
        expenses.push({
            id: child.key,
            ...child.val()
        })
    })
    console.log(expenses)
}, (e) => {
    console.log('Something went wrong', e)
});



/*
database.ref().set({
    name: 'Octav Nicolae',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'software developer',
        company: 'Google'
    },
    location: {
        city: 'London',
        country: 'UK'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})
*/

/*
//read once
database.ref('location/city').once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((e) => {
    console.log('error:', e)
});
*/

/*
//subscribe to database - on / off
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error with data fetching', e)
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    //unsubscribe
    database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(30);
}, 10500);


const onValueChange1 = database.ref().on('value', (snapshot) => {
    const dbData = snapshot.val();
    console.log(dbData.name, 'is a', dbData.job.title, 'at', dbData.job.company)
});
*/
