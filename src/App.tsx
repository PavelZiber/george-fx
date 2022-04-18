import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import { GeAppContainer, lightTheme} from './ui'
import { DashboardPage, NotFoundPage } from './routes'



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GeAppContainer>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard"/>}/>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/:search" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GeAppContainer>
    </ThemeProvider>
  );
}

export default App;
