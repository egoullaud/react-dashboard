
import {ColorModeContext, useMode} from './theme'
//baseline resets css to defaults, themeprovider gives ability to pass themes to mui
import {CssBaseline, ThemeProvider} from '@mui/material'
import Topbar from './scenes/global/Topbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    //set up color context
    <ColorModeContext.Provider value={colorMode}>
    {/* material ui access to theme  */}
      <ThemeProvider theme={theme}>
        {/* reset css to defaults */}
        <CssBaseline>
          <div className="app">
            <main className='content'>
             <Topbar/> 
            </main>
          </div>
         </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
