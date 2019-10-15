import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // const { monsters, searchField } = this.state; -- was writted as a short version of:
    // const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      // from div to div its JSX syntax
      <div className="App">
        <h1> Monsters Rolodex </h1> 
        
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
      /* CardList monsters = {this.state.monsters} before filtering */

      // <input type='search' placeholder='search monsters' onChange={e => this.setState({ searchField: e.target.value })} /> -- SearchBox variable

    );
  }
}

 
// Life Cycle methods = methods that get called at different stages when this component gets rendered

export default App;
