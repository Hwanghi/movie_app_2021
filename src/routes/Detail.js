import React from 'react';
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const {title, year, summary, poster, genres} = location.state;
      return (
        <div className="movie_detail">
          <img src={poster} alt={title} title={title} />
          <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <p className="movie_summary">{summary}</p>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
                return <li key={index} className="movie_genre">{genre}</li>;
            })}
          </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
    
  }
}

export default Detail;