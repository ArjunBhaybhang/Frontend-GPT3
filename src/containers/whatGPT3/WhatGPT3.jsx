import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
			<div className='gpt3__whatgpt3-feature'>
          <Feature title = 'What is GPT-3' text='GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p> Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title = 'Chatbots' text= 'Chatbots are computer programs that are capable of maintaining a conversation with a user in natural language, understanding their intent, and replying based on preset rules and data.'/>
        <Feature title = 'Knowledgebase' text = 'A knowledge base in artificial intelligence aims to capture human expert knowledge to support decision-making, problem-solving, and more. Through the years, knowledge base systems have been developed to support many organizational processes.'/>
        <Feature title = 'Education' text = 'AI provides the mechanisms that enable machines to “gain knowledge.” It allows them to acquire, process, and use knowledge to perform tasks that display “intelligent” behavior, such as: Perception. Learning. Knowledge representation and reasoning.'/>
      </div>
		</div>
  )
}

export default WhatGPT3