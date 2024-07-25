import React from 'react';
import { headerMenu,searchkeyword } from '../../data/header';
import { Link,useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    
  return (
    <nav className='header__menu'>
    <ul className='menu'>
      {headerMenu.map((menu,key)=>(
        <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
          <Link to={menu.src}>
            {menu.icon}{menu.title}
          </Link>
        </li>
      ))}
    </ul>
      <ul className='keyword'>
        {searchkeyword.map((keyword,key)=>(
          <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
            <Link to={keyword.src}>
              {keyword.title}
            </Link>
          </li>
        ))}
        </ul>  
  </nav>  
  )
}

export default Menu