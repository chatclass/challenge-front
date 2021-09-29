import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import theme from '../../theme';

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <main>
      <h2>Capitais</h2>
      <section>tabela</section>
    </main>
  </ThemeProvider>
);

export default HomePage;
