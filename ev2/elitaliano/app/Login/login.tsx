// app/Login/login.tsx
import React from "react";

const Login: React.FC = () => {
  return (
    <>
      {/* Login form */}
      <section className="login-section">
        <div className="container">
          <div className="login-container">
            <h2 className="section-title">Login Cliente</h2>
            <p className="section-subtitle">
              Por favor ingrese sus credenciales para acceder a su cuenta
            </p>

            <div className="login-form">
              <form id="loginForm" method="post">
                <div className="form-floating">
                  <input
                    type="text"
                    id="correoLog"
                    className="form-control"
                    name="correoLog"
                    maxLength={100}
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="correoLog">Correo:</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    id="passLog"
                    className="form-control"
                    name="passLog"
                    minLength={4}
                    maxLength={10}
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="passLog">Contraseña:</label>
                </div>

                <p id="mensajeLog"></p>
                <button type="submit" className="btn-submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 text-center text-white"
        style={{ backgroundColor: "rgba(44,62,80,0.95)" }}
      >
        <p className="mb-0">
          &copy; 2025 El Italiano - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
};

export default Login;
