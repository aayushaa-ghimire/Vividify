import './App.css';
import AppRoutes from './Routing/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;
