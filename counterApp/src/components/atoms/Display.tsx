import React from 'react';

type DisplayProps = {
  value: number;
};

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;