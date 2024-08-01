import React from 'react';
import Input from '../../atoms/Input/index';

type SearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search users..."
    />
  );
};

export default Search;
