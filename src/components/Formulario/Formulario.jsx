import React from "react";
import "./Formulario.scss";

const Formulario = ({ setModal, setUsuario }) => {


  const handlerForm = (e) => {
    e.preventDefault()

    const data = {
      nombre: e.target.nombre.value,
      apellido:e.target.apellido.value,
      email:e.target.email.value,
      contraseña:e.target.contrasena.value
    }
    setUsuario(data)
    setModal(true)

  }


  return (
    <div>
      <div className="datos">
        <form onSubmit={handlerForm}>
          <div className="contenedor-texto">
            <input
              id="nombre"
              name="firstName"
              className="cuadros"
              type="text"
              placeholder="nombre"
              required
              autocomplete="off"
            />
          </div>

          <div className="contenedor-texto">
            <input
              id="apellido"
              name="lastName"
              className="cuadros"
              type="text"
              placeholder="apellido"
              required
              autocomplete="off"
            />
          </div>

          <div className="contenedor-texto">
            <input
              id="email"
              name="email"
              className="cuadros"
              type="email"
              placeholder="correo electronico"
              required
              autocomplete="off"
            />
          </div>

          <div className="contenedor-texto">
            <input
              id="contrasena"
              name="password"
              className="cuadros"
              type="text"
              placeholder="contrasena"
              required
              autocomplete="off"
            />

            <p className="mensaje-error" id="error-password"></p>
          </div>

          <button type="submit" className="boton">
            RECLAMA TU pincha PRUEBA GRATIS
          </button>
        </form>

        <p id="Terminos1">Al hacer click en el boton, usted acepta nuestros</p>
      </div>
    </div>
  );
};

export default Formulario;
