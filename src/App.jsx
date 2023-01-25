import React, { useState } from 'react'
import './App.scss'
import Formulario from './components/Formulario/Formulario'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import TextoPrincipal from './components/TextoPrincipal/TextoPrincipal'


const App = () => {

  const [modal, setModal] = useState(false)
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
  })


  return (
    <>
      <div className='app'>
        <div className='app__texto'>
          <TextoPrincipal />
        </div>
        <div className='app__contenido'>
          <Header />
          <Formulario setModal={setModal} setUsuario={setUsuario} />
        </div>
      </div>
      {modal && <Modal setModal={setModal} usuario={usuario} />

      }
    </>
  )
}

export default App