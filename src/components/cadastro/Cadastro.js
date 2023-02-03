import React, { useState } from "react";

// Boostrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

// CSS
import "./cadastro.css";

// Icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Cadastro = ({ setIsActive }) => {

  // Mostrar / Esconder Senha
  const [state, setState] = useState();

  const [password, setPassword] = useState("password");

  const hideButton = () => {
    setState(!state);

    if (!state) {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  // Password Validation
  const [password_1, setPassword_1] = useState();
  const [password_2, setPassword_2] = useState();
  const [validPass, setvalidPass] = useState();

  const sendUser = (e) => {
    e.preventDefault();

    const onChanges = {
      password_1,
      password_2,
    };

    if (onChanges.password_1 === onChanges.password_2) {
      setvalidPass(false);
    } else {
      setvalidPass(true);
    }
    
  };

  // Alert
  const [show, setShow] = useState(true);

  return (
    <>
      {validPass && show && (
        <Alert
          variant="danger"
          className="alert"
          onClose={() => setShow(false)}
          dismissible
        >
          <p>Suas senhas não coincidem!</p>
        </Alert>
      )}

      <div className="login">
        <h3>Cadastre-se</h3>
        <form onSubmit={sendUser}>
          <Row>
            <Col>
              <input type="email" placeholder="E-mail" required />
              <input
                type={password}
                placeholder="Senha"
                onChange={(e) => setPassword_1(e.target.value)}
                required
              />
              {!state && (
                <BsFillEyeFill className="icon" onClick={hideButton} />
              )}
              {state && (
                <BsFillEyeSlashFill className="icon" onClick={hideButton} />
              )}
              <input
                type="password"
                placeholder="Confirmar Senha"
                onChange={(e) => setPassword_2(e.target.value)}
                required
              />
            </Col>
          </Row>
          <button type="submit" className="button-1" onClick={sendUser}>
            Cadastrar
          </button>
          <button
            type="button"
            className="button-2"
            onClick={() => setIsActive(false)}
          >
            Voltar
          </button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
