import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import { ListItem, StyledList } from '../Cast/Cast.module';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [showNoCast, setShowNoCast] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);

        if (cast.length === 0) {
          setShowNoCast(true);
        } else {
          setShowNoCast(false);
        }
      } catch (e) {
        console.error(e);
        setShowNoCast(true);
      }
    };

    fetchCast();
  }, [movieId]);

  return showNoCast ? (
    <h3>No Cast.</h3>
  ) : (
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
  );
};

export default Cast;



// function olegСar(objCar, model) {
//   Object.entries(objCar).forEach(([key, value]) => {
//     console.log(`${key} => ${value}`);
//   });
// }
// const Car = {
//   model: "Mitsubishi Outlander",
//   year: 2016,
//   color: "White",
//   power: 167
// };
// Car.cost = 20000;
// delete Car.year;
// olegСar(Car);

// const Car = {
//   model: "Mitsubishi Outlander",
//   year: 2016,
//   color: "White",
//   power: 167
// };

// const Name = "model";

// function olegСar(obj, Name) {
//   return obj.hasOwnProperty(Name);
// }

// const hasProp = olegСar(Car, Name);

// if (hasProp) {
//   console.log(`true "${Name}"`);
// } else {
//   console.log(`falce "${Name}"`);
// }

// function olegСar = (obj, Name) => {

//   return ;
// }

