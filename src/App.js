import {useEffect, useState} from 'react';
import EarthPage from './pages/EarthPage';
import MachinePage from './pages/MachinePage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const [dayLight, setDayLight] = useState(true);
  const time = new Date().getHours();

  useEffect(() => {
    if (time > 18) {
      setDayLight(false);
    }
  }, [time]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={<EarthPage dayLight={dayLight} />}></Route>
        <Route exact path='/about' element={<MachinePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
