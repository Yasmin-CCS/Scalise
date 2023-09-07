import './App.css';
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import store from './store/Store';
import { Provider } from 'react-redux';
import { NavBar } from './componentes/navBar/navBar';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <Provider store={store} >
        <NavBar className="navBar100"/>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
