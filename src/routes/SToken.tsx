
import React from 'react';
import { Login } from '../paginas/login/Login';

import { Route, Routes } from 'react-router-dom';


function SToken() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

    </>
  )
}

export default SToken