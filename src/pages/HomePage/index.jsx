import { ThemeProvider } from 'styled-components';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import theme from '../../theme';

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <MainContent />
  </ThemeProvider>
);

export default HomePage;
