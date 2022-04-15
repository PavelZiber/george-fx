import { ThemeProvider } from "styled-components";
import logo from './logo.svg';
import './App.css';
import { GeAppContainer, lightTheme, GeFlex, GeAppLogo } from './ui'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GeAppContainer>
        <GeFlex>
          <GeAppLogo src={logo} alt="logo" />
        </GeFlex>
      </GeAppContainer>
    </ThemeProvider>
  );
}

export default App;
