import React, { useState, useEffect } from 'react';
import { createStore } from '../../Redux/main';
import { storeReducer, actions } from '../../Redux/store/store';

type Props = {
  state: State,
  onSetState: (state: State | (() => State)) => void,
};

export const Store: React.FC<Props> = (props) => {
  const { state, onSetState } = props;
  const { a, b } = state;
  const store = createStore(storeReducer, state);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    // eslint-disable-next-line no-console
    console.log('useEffect', timeOn);

    if (timeOn) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log('interval');
        onSetState(() => ({ a: a + 1, b: b - 1 }));
      }, 1000);

      // eslint-disable-next-line no-console
      console.log('if timeOn', interval);
    }

    if (interval) {
      clearInterval(interval);
    }
  }, [timeOn]);

  const startChange = () => {
    setTimeOn(true);
    store.dispatch(actions.decrease(state));
  };

  // eslint-disable-next-line no-console
  console.log(store.getState());

  const stopChange = () => {
    setTimeOn(false);
  };

  return (
    <div>
      {'<'}
      {state.a}
      {'>'}
      {'<'}
      {state.b}
      {'>'}
      <button type="button" onClick={startChange}>Start</button>
      <button type="button" onClick={stopChange}>Stop</button>
    </div>
  );
};
