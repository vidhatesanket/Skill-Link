import Login from './Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Register from './Register';
import Joblisting from './Joblisting';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navigation /> } />
          <Route path="/Login" element={<Login /> } />
          <Route path="/Register" element={<Register /> } />
          <Route path="/Joblisting" element={<Joblisting /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

