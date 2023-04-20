export const ADD_POINTS = 'ADD_POINTS';
export const REDUCE_POINTS = 'REDUCE_POINTS';

export const addPoints = (amount) => {
  return { type: ADD_POINTS, payload: amount };
};

export const reducePoints = (amount) => {
  return { type: REDUCE_POINTS, payload: amount };
};
