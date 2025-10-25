// app/Registro/registro.tsx
import React from "react";

const Registro: React.FC = () => {
  return (
    <>

      <section className="registration-section">
        <div className="container">
          <div className="registration-container">
            <h2 className="section-title">Registrate aqui</h2>
            <p className="section-subtitle">
              Crea tu cuenta para recibir unicos descuentos
            </p>

            <div className="registration-form">
              <form id="Registro">
                {/* Fila 1 */}
                <div className="form-row">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombreReg" className="form-label">
                        Nombre completo
                      </label>
                      <input
                        id="nombreReg"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Nombre completo"
                        maxLength={100}
                        minLength={3}
                        required
                      />
                      <p id="mensajeNombre" className="error-message"></p>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="correoReg" className="form-label">
                        Correo
                      </label>
                      <input
                        id="correoReg"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Correo"
                        maxLength={100}
                        required
                      />
                      <p id="mensajeCorreo" className="error-message"></p>
                    </div>
                  </div>
                </div>

                {/* Fila 2 */}
                <div className="form-row">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="pass1Reg" className="form-label">
                        Contraseña
                      </label>
                      <input
                        id="pass1Reg"
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Contraseña"
                        minLength={4}
                        maxLength={10}
                        required
                      />
                      <p id="mensajePass1" className="error-message"></p>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="pass2Reg" className="form-label">
                        Confirmar contraseña
                      </label>
                      <input
                        id="pass2Reg"
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Confirmar contraseña"
                        minLength={4}
                        maxLength={10}
                        required
                      />
                      <p id="mensajePass2" className="error-message"></p>
                    </div>
                  </div>
                </div>

                {/* Fila 3 */}
                <div className="form-row">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="telefonoReg" className="form-label">
                        Teléfono (opcional)
                      </label>
                      <input
                        id="telefonoReg"
                        type="number"
                        minLength={9}
                        maxLength={9}
                        className="form-control form-control-lg"
                        placeholder="Teléfono (opcional)"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="sel_region" className="form-label">
                        Región
                      </label>
                      <select
                        id="sel_region"
                        name="sel_region"
                        className="form-select form-select-lg"
                        defaultValue="null"
                      >
                        <option value="null">-- Seleccione la Región --</option>
                        <option value="Santiago">Región Metropolitana de Santiago</option>
                        <option value="Araucania">Región de la Araucanía</option>
                        <option value="Ñuble">Región de Ñuble</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Fila 4 */}
                <div className="form-row">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="sel_comuna" className="form-label">
                        Comuna
                      </label>
                      <select
                        id="sel_comuna"
                        name="sel_comuna"
                        className="form-select form-select-lg"
                        defaultValue="null"
                      >
                        <option value="null">-- Seleccione la Comuna --</option>
                      </select>
                    </div>
                    <div className="col-md-6">{/* columna vacía para balance */}</div>
                  </div>
                </div>

                <p id="mensajeReg" className="text-danger mt-2"></p>

                <button type="submit" className="btn-submit">Registrarse</button>
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

export default Registro;
