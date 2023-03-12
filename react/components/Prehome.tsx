import React from 'react'

import Paises from './Paises'
import Imap from './Imap'
import Coptexto from './Coptexto'

import { useCssHandles } from 'vtex.css-handles'

const videoBg = //'https://player.vimeo.com/video/802837369' //'https://player.vimeo.com/video/802837369?h=3e46546463'
  'https://offcorssqa.vtexcommercestable.com.br/api/dataentities/AF/documents/1000001/Image/attachments/bg-video-paises.mp4'

const Prehome = () => {
  const CSS_HANDLES = ['main', 'video__bg', 'dinamic']

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.main}>
      <div className="contenido flex column space-around">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          className={handles.video__bg}
          style={{ position: 'fixed', zIndex: 0 }}
        />
        <Paises
          props={[
            {
              image:
                'https://offcorss.vteximg.com.br/arquivos/ico-mapa-bolivia.jpg?v=637195621764300000',
              link: 'https://www.offcorss.bo/',
              name: 'Bolivia',
            },
            {
              image:
                'https://offcorss.vteximg.com.br/arquivos/ico-mapa-colombia.jpg?v=637195621780330000',
              link: 'https://www.offcorss.com/',
              name: 'Colombia',
            },
            {
              image:
                'https://offcorss.vteximg.com.br/arquivos/ico-mapa-usa.jpg?v=637195621820270000',
              link: 'https://www.offcorss.us',
              name: 'Estados Unidos',
            },
            {
              image:
                'https://offcorss.vteximg.com.br/arquivos/ico-mapa-peru.jpg?v=637195621810300000',
              link: 'https://www.offcorss.us/pe',
              name: 'Perú',
            },
          ]}
        />
        <div
          className={handles.dinamic}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <Imap width={'100%'} height={'100%'} className="hover" />
          <Coptexto />
        </div>
      </div>
    </div>
  )
}

Prehome.schema = {
  title: 'Landing Prehome',
  type: 'object',
  properties: {
    image: {
      title: 'Bandera del pais',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    link: {
      title: 'Link de redireccionamiento',
      description: 'Agrega un link',
      type: 'string',
    },
    name: {
      title: 'Nombre del país',
      description: 'Agrega un nombre',
      type: 'string',
    },
  },
}

export default Prehome
