import { node } from 'prop-types';
import { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [citySearch, setCitySearch] = useState('');

  return (
    <Context.Provider value={{ citySearch, setCitySearch }}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: node.isRequired,
};

export default ContextProvider;
