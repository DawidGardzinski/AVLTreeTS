import { ThemeProvider } from 'styled-components';

import TestComponent from './Components/TestComponent/TestComponent';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TestComponent />
    </ThemeProvider>
  );
}

export default App;
