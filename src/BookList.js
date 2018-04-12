import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from "./BooksAPI";

class BookList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  onSelectBookCategory = (id, shelf) => {
    let books = this.state.books
    let book = books.find(book => book.id === id)

    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf

      this.setState({books})
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf
            books={this.state.books.filter(book => book.shelf === "currentlyReading")}
            title={"Currently Reading"}
            onSelectBookCategory={this.onSelectBookCategory}
          />
          <Bookshelf
            books={this.state.books.filter(book => book.shelf === "wantToRead")}
            title={"Want to Read"}
            onSelectBookCategory={this.onSelectBookCategory}
          />
          <Bookshelf
            books={this.state.books.filter(book => book.shelf === "read")}
            title={"Read"}
            onSelectBookCategory={this.onSelectBookCategory}
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