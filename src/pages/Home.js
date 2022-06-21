import { useState } from 'react';
import { Box } from '@mui/material';
import Excercises from '../components/Excercises';
import SearchExcercises from '../components/SearchExcercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [excercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExcercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        setExcercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
