import React from 'react';
import InputField from '../../atoms/InputField/index';

interface UserFormProps {
  inputProps: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const UserForm: React.FC<UserFormProps> = ({ inputProps }) => {
  return (
    <form noValidate autoComplete="off">
      <InputField {...inputProps} />
    </form>
  );
};

export default UserForm;
