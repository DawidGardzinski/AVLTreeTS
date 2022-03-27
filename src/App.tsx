import { ThemeProvider } from 'styled-components';
import { VisualTree } from './Components/VisualTree/VisualTree';
import { MainContextProvider } from './MainContext';

import { theme } from './theme';

function App() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <VisualTree />
      </ThemeProvider>
    </MainContextProvider>
  );
}

export default App;
