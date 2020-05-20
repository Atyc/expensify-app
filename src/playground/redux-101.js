import { createStore } from 'redux';
// ACTION GENERATORS
/*
const incrementCount = (payload = {}) =>({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1

})
*/
//destructuring the above
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}={}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const octavTest = () => ({
    type: 'OCTAV',
    value: 10
})

// Reducers
//1. are pure functions (output si ONLY determined by the input, )
//2. Never change state or action

const countReducer = (state = { count: 0, lala: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET': 
            return {
                count: action.count
            }  
        case 'OCTAV':
            return {
                count: state.count,
                lala: action.value
            }    
        default: 
            return state
    }
}

const store = createStore(countReducer)
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState() );
});



//ACTIONS - ways of communicating with the redux store

//increment 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 33}));



// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

//reset 
// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());
store.dispatch(octavTest());

// //decrement 
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
// //decrement 
// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(decrementCount({decrementBy:22}));
store.dispatch(decrementCount());


// store.dispatch ({
//     type: 'SET',
//     count: 101

// })
store.dispatch(setCount({count:99}));