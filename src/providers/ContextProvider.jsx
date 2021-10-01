import { useState } from 'react';

import { node } from 'prop-types';

import Context from './Context';

const ContextProvider = ({ children }) => {
  const [citySearch, setCitySearch] = useState('');

  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  return (
    <Context.Provider
      value={{
        citySearch,
        setCitySearch,
        isOpenDetails,
        setIsOpenDetails,
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: node.isRequired,
};

export default ContextProvider;
