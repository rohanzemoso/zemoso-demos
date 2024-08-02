import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)({
  width: '100%',
  backgroundColor: '#f0f0f0',
  marginTop: '16px',
});

type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <StyledList>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </StyledList>
  );
};

export default UserList;
