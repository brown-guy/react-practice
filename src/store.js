// import { legacy_createStore as createStore } from 'react-redux';
import { legacy_createStore as createStore } from "redux";

//The global state always has a single Object


const initialState = {
    // username: 'Malik'
    count: 0
}

function reducer(state = initialState, action) {
    if (action.type === 'login') {

        return { ...state, status: 'success' }

    }

}

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state, count: state.count + 1
//             };
//         case ('DECREMENT'):
//             return {
//                 ...state, count: state.count - 1
//             };
//         default:
//             return state;


//     };

// }


const store = createStore(reducer);
export default store;