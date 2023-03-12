import React from 'react'
import './styles.css'
import Paises from './Paises'

const videoBg =
  'https://offcorssqa.vtexcommercestable.com.br/api/dataentities/AF/documents/1000001/Image/attachments/bg-video-paises.mp4'

const Prehome = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay muted loop>
        <div className="contenido">
          <Paises />
          <h1>hola tu sitio de interes</h1>
          <p>algo que decir</p>
        </div>
      </video>
    </div>
  )
}

export default Prehome
