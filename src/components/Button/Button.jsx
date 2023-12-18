import React from 'react';
import { ButtonNext } from './ButtonStaled';

export const Button = ({ getPage }) => {
  return <ButtonNext onClick={getPage}>Load more</ButtonNext>;
};
