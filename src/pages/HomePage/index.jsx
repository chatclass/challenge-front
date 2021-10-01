import { useContext, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import Context from '../../providers/Context';
import theme from '../../theme';

const HomePage = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const { setIsDesktop } = useContext(Context);

  const handleResize = () => setWidthScreen(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (widthScreen < 900) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [widthScreen]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
};

export default HomePage;
