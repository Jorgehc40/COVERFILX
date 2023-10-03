import React, { useEffect, useState } from "react";
import { getDetail } from "../../../api/api";
import { getMovieInfo } from "../../../redux/coverflixSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState(); 
  const dispatch = useDispatch();

  const onHoverDetails = (e) => {
    getDetail(e.target.id, setMovieDetail); 
  };

  useEffect(() => {
    dispatch(getMovieInfo(movieDetail));
  }, [movieDetail, dispatch]);

  return (
    <Link to={"/detail"} id={movie.id} onMouseEnter={onHoverDetails}>
      <img
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        id={movie.id}
        alt={`Imagem do poster do filme ${movie.title}`}
        onMouseEnter={(e) => onHoverDetails(e)}
      />
      <div className="infoContainer">
        <h4>Título: {movie.title}</h4>
        <h4>Nota: {movie.vote_average}</h4>
      </div>
    </Link>
  );
};
