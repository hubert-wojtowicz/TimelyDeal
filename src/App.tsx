import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookingGroup } from './components/BookingGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookingGroup slots={12} />
      </header>
    </div>
  );
}

export default App;
