import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getCastMovie } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import { ListItem, StyledList } from '../Cast/Cast.module';

const Cast = () => {
  const { movieId } = useParams();
  const navigate = useNavigate(); 

  const [cast, setCast] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
        setNotFound(true);
      }
    };
    fetchCast();
  }, [movieId]);
  if (notFound) {
    navigate('/'); 
    return null; 
  }

  return (
    <>
      <StyledList>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <ListItem key={id}>
            <img
              src={`${
                profile_path
                  ? BASE_POSTER_URL + profile_path
                  : PLACEHOLDER + '?text=' + original_name
              }`}
              alt={original_name}
            />
            <p>
              <span> Actor:</span> {original_name}
            </p>
            <p>
              <span>Character:</span> {character}
            </p>
          </ListItem>
        ))}
      </StyledList>
    </>
  );
};

export default Cast;

