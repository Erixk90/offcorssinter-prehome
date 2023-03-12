import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

interface Countries {
  props: Array<{
    image: string
    link: string
    name: string
  }>
}

const Paises = ({ props }: Countries) => {
  return (
    <div className="content" style={{ position: 'relative', zIndex: 1 }}>
      <h1> Selecciona tu pais </h1>
      <div className="content__container">
        <ul className="list">
          {props.map((prop) => {
            return (
              <li key={prop.name}>
                <a
                  href={prop.link}
                  className="Barlow-Light f3 black hover-yellow:hover flex items-center bg-light-gray hover-bg-transparent pa2 pr3 ttu pointer ba b--light-gray hover-b--gold bw2 mb3"
                >
                  <img src={prop.image} alt={prop.name} className="mh3" />
                  <h4>{prop.name}</h4>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

Paises.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Paises.defaultProps = {
  image: 'pais',
  link: '/',
  name: 'país',
}

export default Paises

/*
      <ul className="list">
        <li>
          <a
            href="https://www.offcorss.bo/"
            className="Barlow-Light f3 black hover-yellow:hover flex items-center bg-light-gray hover-bg-transparent pa2 pr3 ttu pointer ba b--light-gray hover-b--gold bw2 mb3"
          >
            <img
              src="https://offcorss.vteximg.com.br/arquivos/ico-mapa-bolivia.jpg?v=637195621764300000"
              alt="Bolivia"
              className="mh3"
            />
            Bolivia
          </a>
        </li>
        <li>
          <a
            href="https://www.offcorss.com/"
            className="Barlow-Light f3 black hover-yellow:hover flex items-center bg-light-gray hover-bg-transparent pa2 pr3 ttu pointer ba b--light-gray hover-b--gold bw2 mb3"
          >
            <img
              src="https://offcorss.vteximg.com.br/arquivos/ico-mapa-colombia.jpg?v=637195621780330000"
              alt="Colombia"
              className="mh3"
            />
            Colombia
          </a>
        </li>
        <li>
          <a
            href="https://www.offcorss.bo/"
            className="Barlow-Light f3 black hover-yellow:hover flex items-center bg-light-gray hover-bg-transparent pa2 pr3 ttu pointer ba b--light-gray hover-b--gold bw2 mb3"
          >
            <img
              src="https://offcorss.vteximg.com.br/arquivos/ico-mapa-peru.jpg?v=637195621810300000"
              alt="Peru"
              className="mh3"
            />
            Perú
          </a>
        </li>
      </ul>
    </div>
  )
}

*/
