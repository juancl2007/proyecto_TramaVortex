import React from "react";

export const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        
        <div className="col-12 col-lg-8">
          <h2 className="text-center mb-4 fw-bold">Contáctanos</h2>

          <form className="p-4 shadow rounded bg-light">
            
            <div className="row">
              {/* Nombre */}
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ejemplo@email.com"
                />
              </div>
            </div>

            {/* Asunto */}
            <div className="mb-3">
              <label className="form-label">Asunto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Motivo del mensaje"
              />
            </div>

            {/* Mensaje */}
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            {/* Botón */}
            <div className="text-center">
              <button type="submit" className="btn btn-dark px-4">
                Enviar
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
