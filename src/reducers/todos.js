import * as types from '../constants/action-types';

const initialState = [
  { text: 'hello' }
];

export default function twits(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        { text: action.text },
        ...state
      ];
    default:
      return state;
  }
}
