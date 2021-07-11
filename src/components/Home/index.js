import { Component } from "react";
import CreateMovie from "../CreateMovie";
import SearchMovie from "../SearchMovie";
import "./index.css";

let data = [];
class Home extends Component {
  state = {
    createMovie: true,
    dataAdded: false,
  };

  onCreateMovie = () => {
    this.setState({ createMovie: false });
  };

  onSearchMovie = () => {
    this.setState({ createMovie: true });
  };

  onAddData = (movie, director) => {
    let values = { movie: movie, director: director };
    data.push(values);
    this.setState({ dataAdded: true });
  };

  render() {
    const { createMovie } = this.state;
    return (
      <div className="bg-container">
        {createMovie ? (
          <CreateMovie
            onCreateMovie={this.onCreateMovie}
            onAddData={this.onAddData}
          />
        ) : (
          <SearchMovie onSearchMovie={this.onSearchMovie} data={data} />
        )}
      </div>
    );
  }
}

export default Home;
