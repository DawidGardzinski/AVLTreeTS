import { ThemeProvider } from 'styled-components';
import { Modal } from './Components/Modal/Modal';
import { VisualTree } from './Components/VisualTree/VisualTree';
import { MainContextProvider } from './MainContext';

import { theme } from './theme';

function App() {
  return (
    <MainContextProvider>
      <ThemeProvider theme={theme}>
        <VisualTree />
        <Modal />
      </ThemeProvider>
    </MainContextProvider>
  );
}

export default App;
