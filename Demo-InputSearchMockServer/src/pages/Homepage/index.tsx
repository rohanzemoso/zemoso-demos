import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../../components/molecules/Search';
import UserList from '../../components/organisms/UserList';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  marginTop: '20px',
});

type User = {
  id: number;
  name: string;
};

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        const filteredUsers = response.data.filter((user: User) =>
          user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (searchQuery) {
      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [searchQuery]);

  return (
    <StyledContainer>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserList users={users} />
    </StyledContainer>
  );
};

export default Home;
