import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExerciseCard';

const Exercises = (props) => {
  const { exercises, setExercises, bodyPart } = props;

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        xs={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exedrcise, index) => (
          <ExcerciseCard key={index} exercise={exedrcise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
