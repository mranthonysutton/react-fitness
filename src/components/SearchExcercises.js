import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { excerciseOptions, fetchData } from '../utils/fetchData';

const SearchExcercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'exercisedb.p.rapidapi.com/exercises/bodyPartList',
        excerciseOptions
      );

      console.log(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You
        <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '4px',
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExcercises;
