import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { cloneDeep } from 'lodash'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onSelectBookCategory = (_book, shelf) => {
    const books = cloneDeep(this.state.books)
    let book = books.find(book => book.id === _book.id)

    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      this.setState({ books })
    })
  }

  onSelectBookCategorySearch = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      let exists = this.state.books.some((_book) => _book.id === book.id)

      if (!exists) {
        this.setState({ books: this.state.books.concat([ book] ) })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books}
            onSelectBookCategory={this.onSelectBookCategory}
          />)}
        />
        <Route path='/search' render={() => (
          <BookSearch
            current_books={this.state.books}
            onSelectBookCategory={this.onSelectBookCategorySearch}
          />)}
        />
      </div>
    )
  }
}

export default BooksApp
