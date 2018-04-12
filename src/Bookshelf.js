import React from 'react';
import Book from './Book'

const Bookshelf = ({ books, title, onSelectBookCategory}) => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map(book => (
            <Book
              key={book.id}
              book={book}
              onSelectBookCategory={onSelectBookCategory}
            />))
          }
        </ol>
      </div>
    </div>
  </div>
)

export default Bookshelf