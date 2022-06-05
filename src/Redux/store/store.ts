const CHANGE = 'change';
const INCREASE = 'increase';
const DECREASE = 'decrease';

export const actions = {
  change: (state: State) => ({ type: CHANGE, state }),
  increase: (state: State) => ({ type: INCREASE, state }),
  decrease: (state: State) => ({ type: DECREASE, state }),
};

export const storeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGE:
      return state;

    case INCREASE:
      return {
        ...state,
        a: state.a + 1,
      };

    case DECREASE:
      // eslint-disable-next-line no-console
      console.log('reducer', state);

      return {
        ...state,
        b: state.b - 1,
      };

    default:
      return state;
  }
};
