import * as actionTypes from "../actions";

const initialState = {
  results: []
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.res })
      };
    case actionTypes.DELETE_RESULT:
    // First way
      //   const newArray = [...state.results];
      //   newArray.splice(action.resultElId, 1);
      //   return { ...state, results: newArray };

      // Second way (more common), "filter()" returns new Array without touching existing
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return { ...state, results: updatedArray };
    default:
      return state;
  }
};

export default resultsReducer;
