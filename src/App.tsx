import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import { LandingPage } from './components/landing-page/LandingPage';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
  );
}

export default App;
