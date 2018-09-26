import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation/Navigation';
import Header from './component/header/Header';
import Section from './component/section/Section';
import Footer from './component/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header title="Truongtd Hello React js"/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
