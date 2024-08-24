import React from 'react';
import { Routes, Route} from 'react-router-dom';

import  {HomePage, 
         AboutPage, 
         ContactPage,
         ProjectPage} from '../pages/';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/projects/:projectId' element={<ProjectPage />} /> {/* Add this route */}
        </Routes>
    );
}

export default AppRouter;