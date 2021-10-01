import HomePage from './pages/HomePage';
import ContextProvider from './providers/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default App;
