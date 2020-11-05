//libraries
import React from 'react'
import { connect } from 'react-redux'

//components
import Header from './components/Header'
import Home from './components/Home'

//styles
import './App.css';
import styled from 'styled-components'


function App() {
  return (
      <div className="App">
        <div className='home'>
        <Header />
        <Home />
        </div>
      </div>
  );
}

export default App;
