/// <reference types="react-scripts" />

interface State {
  a: number,
  b: number,
}

interface Actions {
  change: (state: State) => void,
  increase: (state: State) => void,
  decrease: (state: State) => void,
}

interface Action {
  type: CHANGE | INCREASE | DECREASE,
  state: State,
}
