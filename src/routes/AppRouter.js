import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import {
  HomePage,
  AboutPage,
  ContactPage,
  ProjectPage,
  NotFound, // Make sure you have created this component
} from '../pages/';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} /> {/* Corrected the syntax here */}
    </Routes>
  );
}

export default AppRouter;
