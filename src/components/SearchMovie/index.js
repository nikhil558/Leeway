import { Component } from "react";
import EachData from "../EachData";
import "./index.css";

class SearchMovie extends Component {
  state = {
    searchValue: "",
  };

  onBtnClick = () => {
    const { onSearchMovie } = this.props;
    onSearchMovie();
  };

  searchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    const { data } = this.props;
    const { searchValue } = this.state;
    const filterValue = data.filter((each) =>
      each.movie.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div>
        <div className="inputSearchContainer">
          <img
            src="https://res.cloudinary.com/dsqwm3c9a/image/upload/v1625570531/search_ydd5ds.png"
            alt="search-icon"
            className="searchIcon"
          />
          <input
            type="search"
            placeholder="Enter the Movie"
            className="inputSearch"
            onChange={this.searchChange}
          />
        </div>
        <div className="movies-container">
          {filterValue.map((each) => (
            <EachData data1={each} key={each.movie} />
          ))}
        </div>
        <button type="button" className="button" onClick={this.onBtnClick}>
          Add Movie
        </button>
      </div>
    );
  }
}

export default SearchMovie;
