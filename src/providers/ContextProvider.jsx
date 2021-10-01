import { node } from 'prop-types';
import { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [citySearch, setCitySearch] = useState('');
  const [isOpenDetails, setIsOpenDetails] = useState(false);

  return (
    <Context.Provider
      value={{ citySearch, setCitySearch, isOpenDetails, setIsOpenDetails }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: node.isRequired,
};

export default ContextProvider;
