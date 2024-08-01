import React from 'react';
import { Container } from '@mui/material';
import FormContainer from './components/organisms/FormContainer';

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <FormContainer />
    </Container>
  );
};

export default App;
