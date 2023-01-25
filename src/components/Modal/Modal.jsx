import React from 'react'
import './Modal.scss'

const Modal = ({setModal,usuario}) => {

  console.log(usuario);


  return (
    <div className='Modal'>
      <div className='Modal__container'>
        <button className='btn' onClick={()=>setModal(false)}>X</button>
        <h1>{usuario.nombre} {usuario.apellido}</h1>
        <p>{usuario.email}</p>
        <p>{usuario.contraseña}</p>
      </div>
    </div>
  )
}

export default Modal