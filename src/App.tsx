import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/aboutPage/AboutPage'
import ExperiencePage from './pages/experiencePage/ExperiencePage'
import ProjectsPage from './pages/projectPage/ProjectsPage'


const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App