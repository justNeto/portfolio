import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarComponent } from './components';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = 'router'>
      <Router>
        <NavbarComponent />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
