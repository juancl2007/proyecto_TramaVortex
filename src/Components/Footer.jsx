import React from "react";
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo / Descripción */}
          <div className="col-12 col-md-4 mb-3">
            <h5 className="fw-bold">Trama Vortex</h5>
            <p className="small">
              Plataforma dedicada a historias, cómics y contenido creativo.
            </p>
          </div>

          {/* Links */}
          <div className="col-6 col-md-4 mb-3">
            <h6 className="fw-bold">Enlaces</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Inicio</a></li>
              <li><a href="/about" className="text-decoration-none text-light">Nosotros</a></li>
              <li><a href="/comic" className="text-decoration-none text-light">Cómics</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contacto</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div className="col-6 col-md-4 mb-3">
            <h6 className="fw-bold">Síguenos</h6>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm" aria-label="Facebook"> <FaFacebook /> </a>
              <a href="#" className="btn btn-outline-light btn-sm" aria-label="Instagram"> <FaInstagram /> </a>
              <a href="#" className="btn btn-outline-light btn-sm" aria-label="Twitter"> <FaTwitter /> </a>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center pb-3">
          <small>© {new Date().getFullYear()} Trama Vortex - Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};
