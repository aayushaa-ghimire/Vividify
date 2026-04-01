import './App.css';
import AppRoutes from './Routing/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
