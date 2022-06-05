import React from 'react';
import { VisualInput } from './components/VisualInput';

import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <VisualInput />
    </div>
  );
};

const data = async () => {
  const test = await fetch('file//c:/MY_PROJECTS/TEST_TASKS/react_test_project_store/src/csv/test_csv.csv');

  // eslint-disable-next-line no-console
  console.log('test', test.text);

  return test.json;
};

// eslint-disable-next-line no-console
console.log('data', data());
