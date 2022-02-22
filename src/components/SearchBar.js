import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    //you can use the constructor and bind the onFormSubmit. OR
    //make it an arrow function so that the value of "this" is always equal to the instance of searchBar
    onFormSubmit = (event) => {
        event.preventDefault();
        //invoking the onSubmit props from App.js
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;