import { ADD_POINTS, REDUCE_POINTS } from '../actions/actions';

const initialState = 0;

const pointsReducer = (points = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return points + action.payload;
    case REDUCE_POINTS:
      return points - action.payload;
    default:
      return points;
  }
};

export default pointsReducer;
