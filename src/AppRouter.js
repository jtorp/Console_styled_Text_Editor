import {Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const AppRouter = () => {
  return (
      <Routes> 
      <Route path="/" element={<Home/>} />
      <Route exact path="/console" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      );
};

export default AppRouter;
