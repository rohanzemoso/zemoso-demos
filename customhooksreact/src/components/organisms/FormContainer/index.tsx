import React from 'react';
import UserForm from '../../molecules/UserForm/index';
import { Typography, Box, Paper } from '@mui/material';
import useInput from '../../../hooks/useInput';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#f5f5f5',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const StyledTypography = styled(Typography)({
  marginTop: '20px',
  fontWeight: 'bold',
  color: '#333',
});

const FormContainer: React.FC = () => {
  const inputProps = useInput('');

  return (
    <StyledPaper elevation={3}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <UserForm inputProps={inputProps} />
        <StyledTypography variant="h6">
          Your text: {inputProps.value}
        </StyledTypography>
      </Box>
    </StyledPaper>
  );
};

export default FormContainer;
