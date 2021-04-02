import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useRoutes from './routes';
import Navbar from './components/Navbar/Navbar.components';
import 'materialize-css';

import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import Footer from "./components/Footer/Footer.component";

function App() {
  const {login, logout, token, userId, name, photo} = useAuth();
  // const isAuthenticated = !!token;
  const isAuthenticated = true;

  const routes = useRoutes(true);
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, name, photo, isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <Navbar/>}
        <div className={'main-wrapper'}>
          {routes}
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
