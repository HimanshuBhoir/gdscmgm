// Import necessary modules and components
import TransitionColorProvider from './context/TransitionColorContext'; // Importing a context provider
import Page404 from './pages/404'; // Importing the 404 page component
import { AboutUs } from './pages/AboutUs'; // Importing the AboutUs page component
import { ClubsPage } from './pages/Clubs'; // Importing the Clubs page component
import { DeveloperPage } from './pages/Developer'; // Importing the Developer page component
import Home from './pages/Home'; // Importing the Home page component
import StudentPage from './pages/Student'; // Importing the Student page component
import { AnimatePresence } from 'framer-motion'; // Importing motion animation components
import { Route, Routes, useLocation} from 'react-router-dom'; // Importing routing components

function App() {
  const location = useLocation();


  return (
    // Wrap the application with the TransitionColorProvider context provider
      <TransitionColorProvider>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Page404 />} />
          
          </Routes>
        </AnimatePresence>
      </TransitionColorProvider>
  );
}

export default App; // Export the App component as the default export
