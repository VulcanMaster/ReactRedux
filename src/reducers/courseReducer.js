import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS: {
            return action.courses;
        }

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        // case types.CREATE_COURSE: {
        //     // two line not suitable for use, because of state imutability
        //     //state.push(action.course);
        //     // return state;
        //     return [...state,  // ... is the spread operatior
        //     Object.assign({}, action.course)
        //     ];
        // }



        default:
            return state;
    }
}



// import * as types from '../actions/actionTypes';
// import initialState from './initialState';

// // IMPORTANT: Note that with Redux, state should NEVER be changed.
// // State is considered immutable. Instead,
// // create a copy of the state passed and set new values on the copy.
// // Note that I'm using Object.assign to create a copy of current state
// // and update values on the copy.
// export default function courses(state = initialState.courses, action) {
//   switch (action.type) {
//     case types.LOAD_COURSES_SUCCESS:
//       return action.courses;

//     case types.CREATE_COURSE_SUCCESS:
//       return [
//         ...state,
//         Object.assign({}, action.course)
//       ];

//     case types.UPDATE_COURSE_SUCCESS:
//       return [
//         ...state.filter(course => course.id !== action.course.id),
//         Object.assign({}, action.course)
//       ];

//     default:
//       return state;
//   }
// }