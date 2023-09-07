
import React from 'react';
import { TokenState } from "../store/tokens/TokensReducer";


import  CToken  from './CToken'
import  SToken  from './SToken'
import { useSelector } from "react-redux";


function AppRoutes() {

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  return (
    <>

          {token ? <CToken /> : <SToken />}

    </>
  )
}

export default AppRoutes