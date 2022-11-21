import React from 'react';
import './App.css';
import {Person} from './components/Person'

const App: React.FC = () => {

  return (
    <div className="App">
      <Person name ='louisa' age ={25} email="louisa.gonch@gmail.com"/>
    </div>
  );
}

export default App;
