import React, { useState } from "react";

// Components
import Cadastro from "../../components/cadastro/Cadastro";

// Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// CSS
import "./login.css";

// Icon
import userIcon from '../../images/user.png'

const Login = () => {

  // Toggle Cadastro
  const [IsActive, setIsActive] = useState(false);

  return (
    <>
    
      <Container>
        <Row>
        <div className="content">
          
          <Col xs={10} md={6}>
            <div className="content">
              <div className="welcome">
                <p>Já pensou em estar com a maior carteira digital no seu bolso?</p>
                <h1>A CARTEIRA DA NOVA GERAÇÃO.</h1>
                <br />
                <p>
                Somos a Nova Geração transformando o Futuro. <br /> 
                O novo é constante, construa conosco.
                </p>
                <br />
                <span> NG Cash © 2022</span>
              </div>
            </div>
          </Col>

          <Col xs={10} md={4}>
            <div className="content">
              {!IsActive && (
                <div className="login">
                  <h3>Login</h3>
                  <form>
                    <img
                      src={userIcon}
                      alt=""
                    />
                    <input type="text" placeholder="Usuário" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit" className="button-1">
                      Login
                    </button>
                    <button
                      type="button"
                      className="button-2"
                      onClick={() => setIsActive(true)}
                    >
                      Cadastrar
                    </button>
                  </form>
                </div>
              )}

              {IsActive && <Cadastro setIsActive={setIsActive} />}
            </div>
          </Col>

          </div>
        </Row>
      </Container>
    </>
  );
};

export default Login;
