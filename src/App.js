
import {ColorModeContext, useMode} from './theme'
//baseline resets css to defaults, themeprovider gives ability to pass themes to mui
import {CssBaseline, ThemeProvider} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
//import scenes
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
//pages
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
// import Bar from './scenes/bar';
// import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';




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
            <Sidebar/>
            <main className='content'>
             <Topbar/> 
             <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              {/* <Route path="/invoices" element={<Invoices/>}/> */}
              {/* <Route path="/form" element={<Form/>}/> */}
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
              {/* <Route path="/calendar" element={<Calendar/>}/> */}
             </Routes>
            </main>
          </div>
         </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
