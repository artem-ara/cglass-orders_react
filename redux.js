const redux = require('redux');

const initialState = {
   counter: 0
}
//reducer
const reducer = (state = initialState, action) => {

   if (action.type === 'ADD') {
      return {
         counter: state.counter + 1
      }
   }

   if (action.type === 'ADD_NUMBER') {
      return {
         counter: state.counter + action.value
      }
   }

   return state
}
//Store
const store = redux.createStore(reducer);
//Action

const addCount = {
   type: 'ADD'
}

const addCounter ={ 
   type: 'ADD_NUMBER'
}

console.log(store.getState());
store.dispatch({type: 'ADD_NUMBER', value: 10})
console.log(store.getState());