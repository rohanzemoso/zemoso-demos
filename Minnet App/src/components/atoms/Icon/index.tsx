import React from "react";

interface Icon_Props {
  src: string;
  alt?: string;
}

const IconAtom: React.FC<Icon_Props> = ({ ...props }) => {
  return <img {...props}></img>;
};

export default IconAtom;
