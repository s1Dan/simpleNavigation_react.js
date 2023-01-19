import logo from './logo.svg';
import 
{ BrowserRouter as BRouter, Route, Routes }
from "react-router-dom"
import Navation from "./components/navigation"
import Main from "./pages/Main"
import Service from './pages/Service';
import About_us from './pages/About_us';
import Contacts from './pages/Contacts';
import './App.css';

const App = () => 
{
  return (
    <div className="App">
      <BRouter>
        <Navation/>
        <div>
          <Routes>
            <Route path="/main" element={<Main/>} />
            <Route path="/services" element={<Service/>} />
            <Route path="/about" element={<About_us/>} />
            <Route path="/contacts" element={<Contacts/>} />
          </Routes>
        </div>
    </BRouter>
  </div>
  );
}
export default App;





