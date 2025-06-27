import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import DeepCleaningPage from './pages/DeepCleaningPage';
import MaintenanceCleaningPage from './pages/MaintenanceCleaningPage';

import ProfessionalCleaningMainPage from './pages/ProfessionalCleaningMainPage';
import AboutPage from './pages/AboutPage';
import VacanciesPage from './pages/VacanciesPage';
import WindowCleaningPage from './pages/WindowCleaningPage';
import DryCleaningPage from './pages/DryCleaningPage';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const AppWrapper = () => (
  <Router>
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/general-cleaning" element={<HomePage />} />
          <Route path="/deep-cleaning" element={<DeepCleaningPage />} />
          <Route path="/maintenance-cleaning" element={<MaintenanceCleaningPage />} />
          <Route path="/professional-cleaning" element={<ProfessionalCleaningMainPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/window-cleaning" element={<WindowCleaningPage />} />
          <Route path="/dry-cleaning" element={<DryCleaningPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  </Router>
);

function App() {
  return (
    <div className="App">
      <AppWrapper />
    </div>
  );
}

export default App;
