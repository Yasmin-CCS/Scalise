import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../services/Service";
import { addToken } from "../../store/tokens/Action";
import './Login.css';
import { useDispatch } from "react-redux"
import { AuthContext } from '../../contexts/AuthContext';


export function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [load, setLoad] = useState(false)

  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoad(true)
    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);

      setLoad(false)

    } catch (error) {


    };

    setLoad(false)
  }


useEffect(() => {
  if (respUserLogin.token !== "") {
    dispatch(addToken(respUserLogin.token));
    navigate("/listaproduto");
  }
}, [respUserLogin.token]);

return (
  <>
    <div className="loginPage">
      <form className="boxLogin" onSubmit={onSubmit}>
        <p className='titulo'>Entrar</p>
        <div className='divInputLogin'>
          <p>Usuário</p>
          <input
            className='mediumInput inputLogin'
            name='usuario'
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedModel(event)
            }
          />
        </div>
        <div className='divInputLogin'>
          <p>Senha</p>
          <input
            className='mediumInput inputLogin'
            name='senha'
            type="password"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedModel(event)
            }
          />
        </div>
        <div className="buttonDiv">
          <button
            className='buttonEntrar buttonGreen'
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </>
)
}