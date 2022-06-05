export function createStore(
  reducer: (state: State, action: Action) => State,
  initialState: State,
) {
  let state = initialState;

  return {
    getState() {
      return state;
    },

    dispatch(action: Action) {
      state = reducer(state, action);

      // eslint-disable-next-line no-console
      console.log(state);
    },
  };
}
