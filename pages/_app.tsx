import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Switch from '@mui/material/Switch'

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Navbar/>
          <Component {...pageProps} />
          <Switch {...label} defaultChecked 
          checked={darkMode}
          onChange={()=> setDarkMode(!darkMode)}/>
      </ThemeProvider>
  )
}
