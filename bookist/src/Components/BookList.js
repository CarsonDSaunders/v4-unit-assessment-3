import React, { Component } from 'react'
import './App.css';

export default class BookList extends Component {
    render() {
        let isShelved = false;
        let mappedBooks = this.props.books.map((book, index) => {
            if (this.props.currentShelf.includes(book.title)) {
                isShelved = true;
            } else {
                isShelved = false;
            }
            return (
                <div className="book-disp" key={index} >
                    <img className={`book-cover ` + (isShelved ? 'shelved-img' : '')} src={book.img} onClick={() => this.props.addBook(book.title)} />
                    <h3 className={(isShelved ? 'shelved-text' : '')}>{book.title}<br className="book-br" />{book.author}</h3>
                </div>
            );
        })
        return (
            <div className="book-list-section">
                <ul className="book-list">{mappedBooks}</ul>
            </div>
        )
    }
}
