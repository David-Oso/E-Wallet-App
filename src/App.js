import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './container/pages/auth/component/login';
import Page2 from './container/pages/auth/component/Page2';
import Page3 from './container/pages/auth/component/page3';
import Page4 from './container/pages/auth/component/page4';
import Page5 from './container/pages/auth/component/page5';
import Page6 from './container/pages/auth/component/page6';
import Page7 from './container/pages/auth/component/page7';
import Page8 from './container/pages/auth/component/page8';


import WebPage1 from './container/pages/auth/component/webpage/webpage1';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/page2" element={<Page2/>}> </Route>
      <Route path="/page3" element={<Page3/>}> </Route>
      <Route path="/page4" element={<Page4/>}> </Route>
      <Route path="/page5" element={<Page5/>}> </Route>
      <Route path="/page6" element={<Page6/>}> </Route>
      <Route path="/page7" element={<Page7/>}> </Route>
      <Route path="/page8" element={<Page8/>}> </Route>
      <Route path='/wepPage1' element={<WebPage1/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
