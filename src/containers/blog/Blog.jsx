import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
			<div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article imgUrl={blog01} date='Mar 22, 2023' title='1 GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>
          <div className='gpt3__blog-container_groupB'>
            <Article imgUrl={blog02} date='Mar 22, 2023' title='2 GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgUrl={blog03} date='Mar 22, 2023' title='3 GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgUrl={blog04} date='Mar 22, 2023' title='4 GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
            <Article imgUrl={blog05} date='Mar 22, 2023' title='5 GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          </div>  
        </div>
      </div>
		</div>
  )
}

export default Blog