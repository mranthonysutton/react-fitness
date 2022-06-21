import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = (props) => {
  const { item, setBodyPart, bodyPart } = props;

  const scrollToExcercise = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        backgroundColor: '#FFF',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '47px',
      }}
      mb="30px"
      onClick={scrollToExcercise}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
