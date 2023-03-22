import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className='gpt3__possibility section padding' id='possibility'>
			<div className='gpt3__possibility-image'>
        <img src = {possibility} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
        We think there are still many new capabilities of GPT-3 yet to be discovered and we want you to help us uncover them! In a similar spirit to our previous Requests for Research and Y Combinator’s Requests for Startups, we’d love to see our current and future developers push the limits of what’s possible with GPT-3 and build new applications
        </p>
        <h4>
          Request Early Access to Get Started
        </h4>
      </div>
		</div>
  )
}

export default Possibility