import React from 'react';
import { snsLink } from '../../data/header';

const Sns = () => {
  return (
    <div className='header__sns'>
    {snsLink.map((sns,key)=>(
          <li key={key}>
            <a href={sns.url} 
              target = '_blank' 
              rel='noopener noreferrer' 
              ariail-label={sns.title}>
              <span>{sns.icon}</span>
            </a>
          </li>
        ))}
  </div>  
  )
}

export default Sns