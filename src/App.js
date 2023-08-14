import { Component } from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        ));
  }

  onSearchChange = (event) => {
    this.setState(
      () => {
        return { searchText: event.target.value.toLocaleLowerCase() };
      },
      () => { }
    )
  }

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (el) => el.name.toLocaleLowerCase().includes(searchText));

    return (
      <div className="App">
<h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="search-box"
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
