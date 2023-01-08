import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const nextBtnAction = () => {
    const newIndex = index === people.length - 1 ? 0 : index + 1
    setIndex(newIndex)
  }
  const prevBtnAction = () => {
    const newIndex = index === 0 ? people.length - 1 : index - 1
    setIndex(newIndex)
  }
  const randomAction = () => {
    let randNumber = Math.floor(Math.random() * 4)
    if (randNumber === index) {
      randNumber = index === people.length - 1 ? 0 : index + 1
    }
    setIndex(randNumber)
  }
  const [index, setIndex] = useState(0)
  const { name, image, job, text } = people[index]
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtnAction}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtnAction}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomAction}>
        surprise me
      </button>
    </article>
  )
}

export default Review
