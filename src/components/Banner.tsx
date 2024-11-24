import React from 'react'

const Banner = () => {
  return (
    <div>
        <a href='/remesas'>
            Comprar remesas a 100 x 110 a cuba desde cualquier pais
        </a>
        <ul>
        {
            Array.from({length: 10000}).map(()=><li>Comprar remesas a 100 x 110 a cuba desde cualquier pais</li>)
        }
        </ul>
    </div>
  )
}

export default Banner