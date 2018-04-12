import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  }

  search = _.debounce(() => {
    if(this.state.query === "") {
      this.setState({ books: [] })
    }
    else {
      BooksAPI.search(this.state.query).then(books => {
        this.setState({ books })
      })}
    }, 300)

  onInputChange = (query) => {
    this.setState({ query })

    this.search()
  }

  onSelectBookCategory = (id, shelf) => {
    let book = this.state.books.find(book => book.id === id)

    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.onInputChange(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { this.state.books.length > 0 && this.state.books.map(book => (
              <Book
                key={book.id}
                book={book}
                onSelectBookCategory={this.onSelectBookCategory}
              />))
            }
          </ol>
          { this.state.books.error === "empty query" && <div className="no-results">
            Sorry, no results were found.<br />Your search '<b>{this.state.query}</b>' did not match any books.
              <div>¯\_(ツ)_/¯</div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default BookSearch