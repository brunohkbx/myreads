import React from 'react';
import Book from './Book'

const Bookshelf = ({ books, title }) => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map(book => (
            <Book
              title={book.title}
              authors={book.authors}
              cover={book.imageLinks.thumbnail}
            />))
          }
        </ol>
      </div>
    </div>
  </div>
)

export default Bookshelf