import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


function Nav(){

    return (
        <div className='Nav'>
          <header>
            <div className="brandbar">
              <a className='logo' href='/'>
                <h1>HANDY</h1>
              </a>
              <div className="brandbar-right">
                <div className="search-bar">
                  <div className="search-area">
                      <input className="search-input" type="text" placeholder="검색어를 입력하세요" maxLength={18}/>
                      <button type="button" class="search-button">
                          <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon_search" aria-hidden="true">
                              <g clip-path="url(#icon_search_svg__a)" stroke="#666" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M7.65 14.3a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3ZM12.456 12.456l4.314 4.314"></path>
                              </g>
                              <defs>
                                  <clipPath id="icon_search_svg__a">
                                      <path fill="#fff" d="M0 0h18v18H0z"></path>
                                  </clipPath>
                              </defs>
                          </svg>
                          <span class="blind">검색</span>
                      </button>
                  </div>
                </div>
                <div className="gnb">
                    <ul className="gnb-list">
                      <li className="gnb-before-login">
                      <div className="gnb-myaccount-box">
                        <a className="gnb-login-button" href='/Login'>
                          <span className="gnb-text">로그인</span>
                      </a></div></li>

                      {/* 
                      <li className="gnb-myaccount">
                        <div className="gnb-myaccount-box">
                        <a className="gnb-my" href='/Login'>
                          <img className="gnb-profile-img" src="./profile.jpg" width="26" height="26" alt="내 프로필 이미지" style={{display: "inline-block"}}/>
                          <span className="filter-mask" style={{display: "inline-block"}}></span>
                          <span className="gnb-name">정선아</span>
                      </a></div></li> */}
                    </ul>
                </div>
              </div>
            </div>
            <hr/>
            <div className="navbar">
              <nav className="navbar">
                <ul id="menu" className="navbar-list">
                  <li className="navbar-item"><a className="navbar-link"  href="/Main">홈</a></li>
                  <li className="navbar-item"><a className="navbar-link"  href="/">수어 통역기</a></li>
                  <li className="navbar-item"><a className="navbar-link"  href="/QuizMain">퀴즈</a></li>
                  <li className="navbar-item"><a className="navbar-link"  href="/CommunityMain">커뮤니티</a></li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
    );
}

export default Nav;