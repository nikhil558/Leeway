import { Component } from "react";
import "./index.css";

class CreateMovie extends Component {
  state = {
    movieInput: "",
    directorInput: "",
  };
  onBtnClick1 = () => {
    const { onCreateMovie } = this.props;
    onCreateMovie();
  };

  movieText = (event) => {
    this.setState({ movieInput: event.target.value });
  };

  directorText = (event) => {
    this.setState({ directorInput: event.target.value });
  };

  submitBtn = () => {
    const { movieInput, directorInput } = this.state;
    const { onAddData } = this.props;
    onAddData(movieInput, directorInput);
  };
  render() {
    return (
      <div class="movie-container">
        <h1 className="movie-heading">Movies</h1>
        <div className="movie-form">
          <label className="label-text">Enter Movie Title</label>
          <input
            type="search"
            className="input-text"
            onChange={this.movieText}
          />
          <label className="label-text">Enter Director name</label>
          <input
            type="search"
            className="input-text"
            onChange={this.directorText}
          />
          <button
            type="button"
            className="button-submit"
            onClick={this.submitBtn}
          >
            Submit
          </button>
          <button type="button" className="button1" onClick={this.onBtnClick1}>
            Search Movie
          </button>
        </div>
      </div>
    );
  }
}

export default CreateMovie;
