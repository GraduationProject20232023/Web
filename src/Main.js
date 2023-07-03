import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './Main.css';
import Login from './Login';

function Main(){

    let [loginBool, setLoginBool] = useState(false);

    return(
        <div className="Main">
            <div className="main-nav-container">
                <div className="main-nav-left">
                    <div className="main-nav-logo">
                        <a href="/">
                            <svg width="10vh" height="2vh" viewBox="0 0 83 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.429688 0.03125H3.94531V7.0625H11.3047V0.03125H14.8203V17H11.3047V9.95703H3.94531V17H0.429688V0.03125ZM16.7539 17L22.6133 0.03125H27.1367L33.0078 17H29.2227L24.9453 3.86328H24.8047L20.5156 17H16.7539ZM29.3867 10.332V13.0859H20.3281V10.332H29.3867ZM49.0742 17H46.0273L38.5742 6.21875H38.4453V17H34.9297V0.03125H38.0234L45.418 10.8008H45.5703V0.03125H49.0742V17ZM53.5391 17V13.9766H57.793C58.8789 13.9766 59.7852 13.7812 60.5117 13.3906C61.2461 13 61.7969 12.4023 62.1641 11.5977C62.5312 10.793 62.7148 9.76172 62.7148 8.50391C62.7148 7.25391 62.5273 6.22656 62.1523 5.42188C61.7852 4.60938 61.2383 4.01172 60.5117 3.62891C59.793 3.24609 58.8945 3.05469 57.8164 3.05469H53.457V0.03125H57.9922C59.6875 0.03125 61.1562 0.367188 62.3984 1.03906C63.6406 1.71094 64.5898 2.6875 65.2461 3.96875C65.9102 5.24219 66.2422 6.75391 66.2422 8.50391C66.2422 10.2617 65.9102 11.7773 65.2461 13.0508C64.582 14.3242 63.625 15.3008 62.375 15.9805C61.1328 16.6602 59.6562 17 57.9453 17H53.5391ZM55.4844 17H51.9688V0.03125H55.4844V17ZM70.6836 0.03125L74.5977 7.34375H74.75L78.6641 0.03125H82.625L76.4258 10.9531V17H72.9219V10.9531L66.7344 0.03125H70.6836Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div className="main-nav-menu">
                        <ul className="main-menu-container">
                            <a href="/">사전</a>
                            <a href="/">게임</a>
                            <a href="/">커뮤니티</a>
                        </ul>
                    </div>
                </div>
                <div className="main-nav-right">
                    <div className="main-search-container">
                        <input className="main-search-input" placeholder="검색" type="text"></input>
                        <div className="main-search-btn">
                            <svg width="4vh" height="4vh" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.989 15.4905L19.5 19.0015" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="main-member-container">
                            <div className="main-member-login" onClick={()=>{setLoginBool(true)}}>로그인</div>
                            <a href="/">회원가입</a>
                    </div>
                </div>
            </div>
            <div className="main-content-container">
                
            </div>
            {loginBool? 
                <div className="login-modal-wrapper">
                    <Login setLoginBool={setLoginBool} className='login-modal'/> 
                </div>
                : null }
           
        </div> 
    )
}

export default Main;