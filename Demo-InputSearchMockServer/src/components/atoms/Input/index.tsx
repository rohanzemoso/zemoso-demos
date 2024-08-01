import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  margin: '8px 0',
});

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <StyledTextField
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fullWidth
    />
  );
};

export default Input;
