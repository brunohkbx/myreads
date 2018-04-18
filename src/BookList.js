import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BookList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            books={this.props.books.filter(book => book.shelf === "currentlyReading")}
            title={"Currently Reading"}
            onSelectBookCategory={this.props.onSelectBookCategory}
          />
          <Bookshelf
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            title={"Want to Read"}
            onSelectBookCategory={this.props.onSelectBookCategory}
          />
          <Bookshelf
            books={this.props.books.filter(book => book.shelf === "read")}
            title={"Read"}
            onSelectBookCategory={this.props.onSelectBookCategory}
          />
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookList