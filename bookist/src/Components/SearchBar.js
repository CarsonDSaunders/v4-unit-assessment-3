import React, { Component } from 'react'
import './App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }

        this.handleClear = this.handleClear.bind(this)
    }

    updateInput(val) {
        this.setState({ input: val });
    }

    handleClear() {
        this.setState({ input: '' });
        this.props.reset();
    }

    render() {
        let hasContent = false;
        if (this.state.input === '') {
            hasContent = true;
        } else {
            hasContent = false;
        }
        return (
            <div className="searchbar">
                <form>
                    <input className="search-box" type='text' name='search' value={this.state.input} placeholder='Enter Search Term' onChange={(e) => this.updateInput(e.target.value)} />
                    <button className="search-btn" type="button" onClick={() => {
                        this.props.handleSearch(this.state.input)
                    }}>Search</button>
                    <input className={"search-btn " + (hasContent ? 'empty-search' : '')} type='reset' value='Clear' onClick={this.handleClear}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar