import React from "react"
import './Search.css';
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event){
    this.setState({
      term: event.target.term
    })
  }
  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;
  // Please login or signup to FixMe