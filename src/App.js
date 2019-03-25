import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/question-card';
import Header from './components/header';
import useDarkMode from 'use-dark-mode';

class App extends Component {

  render() {

    // const darkMode = useDarkMode(true);
    return (
      <div className="App">
        <Header />
        <QuestionCard />
      </div>
    );
  }
}

export default App;
