import "./App.css";
import * as BookApi from "./BooksApi";
import { Route, Link } from "react-router-dom";

import React from "react";

class App extends React.Component {
  state = {
    books: [],
    message: "no books on shelf",
  };

  shelveChange() {}

  componentDidMount() {
    BookApi.getAll()
      .then((books) => this.setState({ books }))
      .catch((err) => console.log("error in api", err));
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/search" render={() => {}} />
        <Route exact path="/" render={() => {}} />
      </div>
    );
  }
}

export default App;
