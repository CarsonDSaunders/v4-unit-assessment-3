import React, { Component } from 'react'
import './Components/App.css';
import data from './data';

//Components
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: data,
      dispBooks: data,
      shelf: [],
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
  }

  addToShelf(title) {
    let intShelf = this.state.shelf;
    intShelf.push(title);
    console.log(title);
    this.setState({ shelf: intShelf })
  }

  clearShelf() {
    this.setState({ shelf: [] });
  }

  filterBooks(input) {
    this.resetFilter();
    input = input.toLowerCase();
    let filteredBooks = this.state.dispBooks.filter((book, index) => {
      let bookTitle = book.title.toLowerCase();
      return bookTitle.includes(input)
    })

    this.setState({ dispBooks: filteredBooks })
  }

  resetFilter() {
    this.setState({ dispBooks: data });
  }

  render() {
    return (
      <div className="app">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@600&display=swap');
          import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        </style>
        <div className="header">
          <Header />
          <SearchBar handleSearch={this.filterBooks} reset={this.resetFilter} />
        </div>
        <div className="main">
          <BookList className="list" books={this.state.dispBooks} addBook={this.addToShelf} currentShelf={this.state.shelf} />
          <Shelf className="shelf" shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </div>
      </div>
    )
  }
}

export default App;