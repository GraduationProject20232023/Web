import React from "react";
import Nav from './Nav';
import './DicMain.css';
import {ReactComponent as SearchImg} from "./images/dic-search.svg"

function DicMain(){
    return(
        <div className="DicMain">
            <Nav/>
            <div className="dicMain-wrapper">
                <div className="dic-nav-wrapper">
                    <div className="dic-nav-menu-wrapper">
                        <ul className="dic-nav-menu">
                            <a href="/">일상생활</a>
                            <a href="/">전문 용어</a>
                            <a href="/">문화 정보</a>
                        </ul>
                    </div>
                    <div className="dic-nav-vocab"><a href="/">
                        <div href="/" className="vocab-title">단어장</div>
                        <div className="vocab-container">
                            <span className="vocab-name">지출</span>
                            <div className="vocab-image">
                                <img src={process.env.PUBLIC_URL+'/images/dic-vocab-1.jpg'}></img>
                            </div>
                        </div>

                        <div className="vocab-container">
                            <span className="vocab-name">그냥, 그대로</span>
                            <div className="vocab-image">
                                <img src={process.env.PUBLIC_URL+'/images/dic-vocab-2.jpg'}></img>
                            </div>
                        </div>
                    </a></div>
                </div>
                <div className="dic-content-wrapper">
                    <div className="dic-search-wrapper">
                        <input type="text" placeholder="검색어를 입력하세요" className="search-box"></input>
                        <div className="search-btn"><SearchImg/></div>
                    </div>
                    <div className="dic-todaysign-wrapper">
                        <div className="dic-todaysign-title">오늘의 수어</div>
                        <div className="dic-todaysign">
                            <div className="todaysign-container">
                                <video controls>
                                    <source type="video/webm" src="http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20200901/739060/MOV000251190_700X466.webm"></source>
                                    {/* <source type="video/mp4" src="./images/dic-todaysign-1.mp4"></source> */}
                                </video>
                                <a href="/" className="todaysign-name">그냥, 그저</a>
                            </div>

                            <div className="todaysign-container">
                                <video controls>
                                    <source type="video/webm" src="http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20200901/739060/MOV000251190_700X466.webm"></source>
                                    {/* <source type="video/mp4" src="./images/dic-todaysign-1.mp4"></source> */}
                                </video>
                                <a href="/" className="todaysign-name">그냥, 그저</a>
                            </div>

                            <div className="todaysign-container">
                                <video controls>
                                    <source type="video/webm" src="http://sldict.korean.go.kr/multimedia/multimedia_files/convert/20200901/739060/MOV000251190_700X466.webm"></source>
                                    {/* <source type="video/mp4" src="./images/dic-todaysign-1.mp4"></source> */}
                                </video>
                                <a href="/" className="todaysign-name">그냥, 그저</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DicMain;