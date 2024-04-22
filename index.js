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

//   1.state
//  2. dispatch action
//  3.reducer
// 4.store