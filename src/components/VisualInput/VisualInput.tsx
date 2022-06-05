import React, { useState } from 'react';
import { Store } from '../Store';

export const VisualInput: React.FC = () => {
  const [state, setState] = useState<State>({ a: -5, b: 10 });

  return (
    <div>
      <input type="text" />
      <Store state={state} onSetState={setState} />
    </div>
  );
};
