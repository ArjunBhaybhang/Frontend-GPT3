import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Answers endpoint',
    text: 'Searches provided information (documents, knowledge bases etc.) for relevant context to be added to the prompt before completing with GPT-3. Can be used to build applications like customer support bots with no fine-tuning.'
  },
  {
    title: 'Classifications endpoint',
    text: 'Can leverage labeled training data without fine-tuning. By searching for the closest examples with respect to the input query and adding them to prompt, it often matches the performance of state of the art fine-tuned models, providing an autoML solution that is easy to configure and adapt.'
  },
  {
    title: 'Enhanced search endpoint',
    text: 'Provides the backbone for the Answers and Classifications endpoints that scales to a large number of documents while also being cheap and fast.'
  },
  {
    title: 'Prompt library',
    text: 'Provides starter prompt design examples for dozens of use cases that users can begin programming with directly in Playground, like a Spreadsheet Generator, Grammar Corrector, or Airport Code Extractor.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
			<div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>
          Request Early Access to Get Started
        </p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
		</div>
  )
}

export default Features