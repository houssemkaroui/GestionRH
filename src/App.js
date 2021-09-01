
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './pages/login';
import Register from './pages/register'
import { AppProvider } from "./components/contextapi"
import Conge from "./pages/Conge";
import { AuthProvider } from './context';
import Absence from "./pages/Absence";
import  Recrutement from "./pages/Recrutement"
import Utilisateur from "./pages/Utilisateur"
import Tache from "./pages/Tache"
const App = () => {
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path='/Conge' exact component={Conge} />
              <Route path='/' exact component={SignUp} />
              <Route path='/Register' component={Register} />
              <Route path='/Absence' exact component={Absence} />
              <Route path='/Recrutement' exact component={Recrutement} />
              <Route path='/Utilisateur' exact component={Utilisateur} />
              <Route path='/Tache' exact component={Tache} />

            </Switch>
          </BrowserRouter>
        </AppProvider>

      </AuthProvider>

    </>
  );
}

export default App;