import React from 'react';
import { MainContext } from '../MainContext';

export const useMainContext = () => {
  const context = React.useContext(MainContext)
  return context;
};
