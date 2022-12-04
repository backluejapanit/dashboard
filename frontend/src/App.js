import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Container } from 'react-bootstrap';

import Home from './screen/Home';
/* import Setting from './screen/Setting';
import TimeSheet from './screen/TimeSheet';
import User from './screen/User'; */

function App() {
  return (
    <BrowserRouter>
      <main className='wrapper'>
        <SideBar />
        <Container className='mt-5 mb-3'>
          <Routes>
            <Route path='/home' element={<Home />} />
            {/*    <Route path='/user' element={<User />} />
            <Route path='/timesheet' element={<TimeSheet  />} />
            <Route path='/setting' element={<Setting />} /> */}
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
