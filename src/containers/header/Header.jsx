import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section_padding' id='home'>
			<div className='gpt3__header-content'>
        <h1 className='gradient__text'>
            Let's Build Something Amazing with GPT-2 OpenAI
        </h1>

        <p>
          As easy as playing a game but extremly powerful, we help you build application with the amazing GPT-3. There are tones of options to explore. Get as creative as you can. Take a look at some of the projects our community have built.
        </p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
		</div>
  )
}

export default Header