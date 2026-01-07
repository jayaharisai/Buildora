import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/login/Login';
import "./components/Common.css"
import Register from './components/authentication/register/Register';
import Main from './components/pages/main/Main';
import Projects from './components/pages/projects/Projects';
import Configurations from './components/pages/configuration/Configurations';
import Overview from './components/pages/project_container/overview/Overview';
import Templateedit from './components/pages/project_container/template_edit/Template_edit';
import Profile from './components/pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Configurations />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/template_edit" element={<Templateedit />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
