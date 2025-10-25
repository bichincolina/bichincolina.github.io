import React from "react";

const Contacto: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "60vh",
          backgroundImage: "url('/IMG/cannoli-fondo-contacto.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded-4">
          <h1 className="display-4 fw-bold">Contáctanos</h1>
          <p className="lead">¿Tienes alguna pregunta? Estamos para ayudarte</p>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="contact-container">
            <h2 className="text-center mb-4">Envíanos un mensaje</h2>
            <p className="text-center text-muted mb-5">
              ¡Nos encantaría conocer tu opinión!
            </p>

            <form id="contactoForm" className="contact-form" method="post">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="contactoNombre"
                      name="contactoNombre"
                      placeholder="Ingresa tu nombre"
                      minLength={3}
                      maxLength={100}
                      required
                    />
                    <label htmlFor="contactoNombre">Nombre</label>
                    <p id="mensajeNombre" className="error-message"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="contactoEmail"
                      name="contactoEmail"
                      placeholder="Ingresa tu email"
                      minLength={3}
                      maxLength={100}
                      required
                    />
                    <label htmlFor="contactoEmail">Email</label>
                    <p id="mensajeEmail" className="error-message"></p>
                  </div>
                </div>
              </div>

              <div className="form-floating mt-4">
                <textarea
                  className="form-control"
                  id="contactoMensaje"
                  name="contactoMensaje"
                  placeholder="Ingresa tu mensaje..."
                  style={{ height: "150px" }}
                  minLength={3}
                  maxLength={500}
                  required
                ></textarea>
                <label htmlFor="contactoMensaje">Mensaje</label>
                <div className="text-muted mt-2">
                  <small>
                    <span id="contadorMensaje">0</span>/500
                  </small>
                </div>
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="btn btn-dark btn-lg rounded-pill">
                  Enviar
                </button>
              </div>

              <p id="mensajeExito" className="success-message text-center mt-3"></p>
            </form>
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

export default Contacto;
