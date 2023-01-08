import React, { useState } from 'react'

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [ReadMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price} $</h4>
        </div>
        <p>
          {ReadMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!ReadMore)}>
            {ReadMore ? 'Show Less' : 'Read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not intrested
        </button>
      </footer>
    </article>
  )
}

export default Tour
