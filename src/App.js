import "./App.css";
import * as BookApi from "./BooksApi";
import { Route, Link } from "react-router-dom";

import BookSearchComponent from "./components/SearchComponent.js";
import BookShelfComponent from "./components/BookShelfComponent";

import React from "react";

class BookApp extends React.Component {
  state = {
    books: [],
    message: "no books on shelf",
  };

  shelveChange(book, shelf) {
    BookApi.update(book, shelf).then(() => {
      BookApi.getAll().then((books) => {
        this.setState({ books });
      });
    });
  }

  componentDidMount() {
    BookApi.getAll()
      .then((books) => this.setState({ books }))
      .catch((err) => console.log("error in api", err));
  }
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchComponent
              message={this.state.message}
              bookList={this.state.books}
              handleChangeShelve={this.handleChangeShelve.bind(this)}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h2>MyReads list</h2>
                </div>
              </div>
              <div className="list-books-content">
                <BookShelfComponent
                  headline={"Currently Reading"}
                  message={this.state.message}
                  handleChangeShelve={this.handleChangeShelve.bind(this)}
                  books={this.state.books.filter(
                    (book) => book.shelf === "currentlyReading"
                  )}
                />
                <BookShelfComponent
                  headline={"Want To Read"}
                  message={this.state.message}
                  handleChangeShelve={this.handleChangeShelve.bind(this)}
                  books={this.state.books.filter(
                    (book) => book.shelf === "wantToRead"
                  )}
                />
                <BookShelfComponent
                  headline={"Currently Reading"}
                  message={this.state.message}
                  handleChangeShelve={this.handleChangeShelve.bind(this)}
                  books={this.state.books.filter(
                    (book) => book.shelf === "currentlyReading"
                  )}
                />
                <BookShelfComponent
                  headline={"Want To Read"}
                  message={this.state.message}
                  handleChangeShelve={this.handleChangeShelve.bind(this)}
                  books={this.state.books.filter(
                    (book) => book.shelf === "wantToRead"
                  )}
                />
                <BookShelfComponent
                  headline={"Read Books"}
                  message={this.state.message}
                  handleChangeShelve={this.handleChangeShelve.bind(this)}
                  books={this.state.books.filter(
                    (book) => book.shelf === "read"
                  )}
                />
              </div>
              <div className="open-search">
                <link to="/search">Add new Book</link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BookApp;
