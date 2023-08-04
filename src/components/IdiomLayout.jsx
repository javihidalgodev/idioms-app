/* eslint-disable react/prop-types */
import './IdiomLayout.css'

export default function IdiomLayout ({ idiom }) {
  return (
    <>
        {
          // idioms.map(idiom => (
            <div key={crypto.randomUUID} className='idiomElement'>
              <h3>{idiom.idiom}</h3>
              <p>Traducción: <i>{idiom.translate}</i></p>
              <p>Ejemplo: <i>"{idiom.example}"</i></p>
              {
                idiom.video && <iframe width="560" height="315" src={idiom.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              }
            </div>
          // ))
        }
    </>
  )
}