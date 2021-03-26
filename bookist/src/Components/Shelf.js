import React, { Component } from 'react'
import './App.css';

export default class Shelf extends Component {
    render() {
        let passedShelf = this.props.shelf;
        let mappedShelf
        if (this.props.shelf.length === 0) {
            return (
                <span className="empty">Your shelf is empty! Click a book cover to add it to your shelf!</span>
            )
        } else {
            mappedShelf = passedShelf.map((title, index) => {
                return (
                    <div className="" key={index} >
                        <h2>{title}</h2>
                        <hr className="shelf-divider" />
                    </div>
                )
            })
        }
        return (
            <div className="shelf-disp" >
                <button className="clear-shelf" onClick={this.props.clearShelf}>Clear Shelf</button>
                <ul className="shelf">{mappedShelf}</ul>
            </div>
        )
    }
}
