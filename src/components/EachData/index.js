import "./index.css";

const EachData = (props) => {
  const { data1 } = props;
  return (
    <div className="cards">
      <h1 className="cards-movie-title">{data1.movie}</h1>
      <h1 className="cards-director-name">{data1.director}</h1>
    </div>
  );
};

export default EachData;
