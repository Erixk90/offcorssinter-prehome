import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const Coptexto = () => {
  const CSS_HANDLES = ['image__container', 'info__container']

  const handlesCop = useCssHandles(CSS_HANDLES)

  return (
    <div className={handlesCop.image__container}>
      <img
        src="https://offcorss.vteximg.com.br/arquivos/logo-OFFCORSS.png?v=636595683558800000"
        alt="offcorss"
      />
      <div className={`${handlesCop.info__container}`}>
        <h1 className="f1 i ttu">
          ¡QUEREMOS LLEVAR LA DIVERSIÓN HASTA DONDE TÚ ESTÉS!
        </h1>
        <p className="f3">Los looks más cómodos y coloridos</p>
        <p className="f4">ya llegan hasta la comodidad de tu casa.</p>
        <p className="f4">Pídelos desde donde estés</p>
        <p className="f3 i">
          y nosotros nos encargamos de que lleguen a llenarte de sonrisas.
        </p>
      </div>
    </div>
  )
}

export default Coptexto
