import React from "react"
import { Link } from "react-router-dom";
import DicMain from './DicMain';
import Nav from './Nav';
import './Main.css';

function Main(){
    return(
       <div className="Main">
            <Nav/>
            <div className='main-screen'>
                <div className='main-img'>
                    <img className='main-handImg' src='/mainHand.png'/>
                </div>
                <div className='main-letter'>
                    <div className='main1'>
                        <div className='main-title'>HANDY로 시작하는 수어 첫 걸음</div>
                        <div>웹 디자인, 도전해보세요</div>
                    </div>
                    <div className='main2'>
                        <div>오직 소리다. 이것은 얼음 이상의 사라지지 스며들어 그들의 얼음과 청춘을 약동하다.</div>
                        <div>피가 대중을 놀이 어디 청춘 반짝이는 사라지지 봄바람이다.</div>
                    </div>
                    <div className='main3'>
                        <a href="/DicMain"><div className='main3-btn'>사전 이용해보기</div></a>
                        <a href="/CommunityMain"><div className='main3-btn'>커뮤니티로 가기</div></a>
                        
                    </div>
                </div>
        </div>


       </div>
        
    )
}

export default Main;