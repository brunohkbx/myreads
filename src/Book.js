import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, onSelectBookCategory }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={(event) => onSelectBookCategory(book.id, event.target.value)} value={book.shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {Array.isArray(book.authors) && book.authors.map(author => (
        <div key={author} className="book-authors">{author}</div>
      ))}
    </div>
  </li>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onSelectBookCategory: PropTypes.func.isRequired
}

export default Book