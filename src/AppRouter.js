import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Console from './pages/Console';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/console" element={<Console />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
