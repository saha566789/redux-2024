const {createStore} = require("redux")


// defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

// state
const initialCounterState={
 count:0,
}
const initialUsersState={
 users:[{name:"priya"}],
}


// action - object-type-payload
// INCREMENT counter

const IncrementCounter =()=>{
  return{
    type:INCREMENT
}
}

// DECREMENT counter

const decrementCounter =()=>{
    return{
      type:DECREMENT
  }
  }
const addUser =()=>{
    return{
      type:ADD_USER,
      payload: {name: "saha"}
      }
  }

// create reducer for counter
const counterReducer = (state=initialCounterState,action) =>{
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        count:state.count + 1
      }
   case DECREMENT:
    return{
      ...state,
      count:state.count - 1
    }
    default:
      state;
  }
}

  
//   1.state
//  2. dispatch action
//  3.reducer
// 4.store-getState(),dispatch(),subscribe()

// create store
const store = createStore(counterReducer)

store.subscribe(()=>{
  console.log(store.getState())
})

// dispatch action
store.dispatch(IncrementCounter())
store.dispatch(decrementCounter())