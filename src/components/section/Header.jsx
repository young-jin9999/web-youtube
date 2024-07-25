import React from 'react'

import { BsYoutube } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { SiWebtrees } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
          <a href='/'>
            <em aria-hidden='true'></em>
            <span>MY<br />YouTube</span>
          </a>
        </h1>  
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><BsYoutube></BsYoutube>MY Youtube</a>
          </li>
          <li>
            <a href='/today'><FaListUl></FaListUl>추천 영상</a>
          </li>
          <li>
            <a href='/developer'><MdDeveloperBoard></MdDeveloperBoard>추천 개발자</a>
          </li>
          <li>
            <a href='/webd'><SiWebtrees></SiWebtrees>웹디자인</a>
          </li>
          <li>
            <a href='/gsap'><BiMoviePlay></BiMoviePlay>GSAP</a>
          </li>
          <li>
            <a href='/port'><IoIosPaper></IoIosPaper>포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/youtube'><CiYoutube></CiYoutube>유튜브 사이트</a>
          </li>
        </ul>
          <ul className='keyword'>
            <li>
              <a href='/search/myyoutube'>MY Youtube</a>
            </li>
            <li>
              <a href='/search/html'>HTML</a>
            </li>
            <li>
              <a href='/search/css'>CSS</a>
            </li>
            <li>
              <a href='/search/javascript'>JavaScript</a>
            </li>
            <li>
              <a href='/search/react.js'>React.js</a>
            </li>
            <li>
              <a href='/search/java'>JAVA</a>
            </li>
            <li>
              <a href='/search/oracle'>Oracle</a>
            </li>
            <li>
              <a href='/search/spring'>Spring</a>
            </li>
            <li>
              <a href='/search/music'>Music</a>
            </li>
            <li>
              <a href='/search/vue.js'>Vue.js</a>
            </li>
          </ul>  
      </nav>  
      <div className='header__sns'>
        <ul>
          <li>
            <a href="https://github.com/young-jin9999/web-youtube" 
             rel='noopener noreferrer'><AiFillGithub></AiFillGithub>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" 
              rel='noopener noreferrer'><AiFillYoutube></AiFillYoutube>
            </a>
          </li>
          <li>
            <a href="https://www.google.com" 
             rel='noopener noreferrer'><AiFillGoogleCircle></AiFillGoogleCircle>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" 
              rel='noopener noreferrer'><AiFillInstagram></AiFillInstagram>
            </a>
          </li>
        </ul>
      </div>  
    </header>
  )
}

export default Header