import React from 'react';
import { TextField } from '@mui/material';

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return <TextField label="Enter Text" value={value} onChange={onChange} variant="outlined" fullWidth />;
};

export default InputField;
