import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={style.AppStyle}>  
      <Form />
      <List />
      <Stopwatch /> 
    </div>
  );
}

export default App;
