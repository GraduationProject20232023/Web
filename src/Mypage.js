import React from "react";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import {ReactComponent as DefaultProfile } from "./images/mypage-default-profile.svg";
import './Mypage.css';

function Mypage(){
    return(
        <div className="Mypage">
            <Nav/>
            <section className="mypage-wrapper">
                <div className="user-nav-wrapper">
                    <nav className="user-nav">
                        <section className="user-profile-wrapper">
                            <div className="user-profile">
                                <div className="user-profile-left">
                                    <h1 className="profile-name">정선아</h1>
                                    <a className="edit-icon">
                                        <svg width="16" height="16" color="#616568" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#212529" fill-rule="evenodd" d="M11.508 1.451c.456-.455 1.195-.455 1.65 0l1.724 1.724c.456.456.456 1.194 0 1.65L13.02 6.687l-.008.008-7.219 6.89c-.132.126-.291.22-.466.273l-3.681 1.12c-.177.054-.369.006-.5-.124-.13-.131-.178-.323-.124-.5l1.115-3.666c.059-.192.166-.365.311-.504L9.651 3.31l1.857-1.858zM9.992 4.366l-6.854 6.542c-.02.02-.036.044-.044.072l-.843 2.769 2.785-.848c.025-.007.048-.02.067-.039l6.848-6.537-1.96-1.96zm2.675 1.26l1.508-1.508c.065-.065.065-.17 0-.236l-1.724-1.724c-.065-.065-.17-.065-.236 0l-1.508 1.509 1.96 1.96z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                                <DefaultProfile className="user-profile-right"/>
                            </div>
                        </section>
                        <div className="user-nav-menu-wrapper">
                            <ul className="user-nav-menu">
                                <a href="/">홈</a>
                                <a href="/">단어장</a> 
                                <a href="/">게임 기록</a>
                            </ul>
                        </div>
                    </nav> 
                </div>
                <div className="user-content-wrapper">
                    <div className="user-content introduce-container">
                        <div className="introduce-header">
                            <h2>소개</h2>
                            <div className="introduce-header-right">
                                <button className="introduce-edit">편집</button>
                            </div>
                        </div>
                        <div className="introduce-content content">
                            <p className="empty-content detail">소개가 없습니다.</p>
                        </div>
                    </div>
                    <div className="user-content post-container">
                        <div className="post-header">
                            <h2>게시글</h2>
                        </div>
                        <div className="post-content content">
                            <p className="empty-content detail">게시글이 없습니다.</p>
                        </div>
                    </div>
                    <div className="user-content game-record-container">
                        <div className="record-header">
                            <h2>게임 기록</h2>
                        </div>
                        <div className="record-content content">
                            <p className="empty-content detail">게임 기록이 없습니다.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mypage;