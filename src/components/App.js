import React, { Component } from "react";
import './app.scss';
import Header from './header/header.component';
import Search from './search/search.component';
import MainContent from "./main_content/main_content.component";

class App extends Component {
  constructor() {
      super();
      this.state = {
          
      }
  }

  render() {
      return (
          <div className="app">
            <Header />
            <Search />
            <MainContent />              
          </div>
      )
  }
}

export default App;

