import { Component } from "react";


export class SearchBar extends Component {
    state = {
        imageName: '',
        
    }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.imageName.trim() === '') {
            alert('Enter something')
            return
        }

        this.props.onSubmit(this.state.imageName)
        
        this.setState({
            imageName: '',
        })
    }

    handleNameChange = (e) => {
        this.setState({
            imageName: e.currentTarget.value,
        })
    };




    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        onChange={this.handleNameChange}
                        value={this.state.imageName}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
    
};