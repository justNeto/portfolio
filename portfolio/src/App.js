import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarComponent } from './components';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <AppRouter />
    </Router>
  );
}

export default App;
