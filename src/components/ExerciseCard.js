import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = (props) => {
  const { exercise } = props;
  return (
    <Link to={`/exercise/${exercise.id}`} className="excercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    </Link>
  );
};

export default ExerciseCard;
