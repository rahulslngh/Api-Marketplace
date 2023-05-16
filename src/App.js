
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ApisPage from './Pages/ApisPage';
import HomePage from './Pages/HomePage';
import EmpApidoc from './Pages/EmpApidoc';
import Workspace from './Pages/MyWorkspace/Workspace';
import ManageAPis from './Pages/ManageAPis/ManageAPis';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apis" element={<ApisPage />} />
        <Route path="/emp-api-doc" element={<EmpApidoc/>} />
         <Route path="/workspace" element={<Workspace/>} />
        <Route path="/manage-apis" element={<ManageAPis/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
