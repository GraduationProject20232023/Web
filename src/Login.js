import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ReactComponent as LoginClose } from "./images/login-close.svg";
import {ReactComponent as Kakao } from "./images/login-kakao.svg";
import {ReactComponent as Facebook } from "./images/login-facebook.svg";
import {ReactComponent as Google } from "./images/login-google.svg";
import {ReactComponent as Naver } from "./images/login-naver.svg";
import './Login.css';

const User = {
  id: 'handy1234',
  pw: 'Handy1234!'
}

function Login(props){
    const [id, setID] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIDValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handleEmail = (e) => {
      setID(e.target.value);
      const regex = /^[A-Za-z0-9]{4,10}$/;
      if (regex.test(e.target.value)) {
        setIDValid(true);
      } else {
        setIDValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    return (
      <div className="Login">
        <span onClick={()=>{props.setLoginBool(false)}}className="login-close">
          <LoginClose/>
        </span>
        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              // placeholder="영문자, 숫자 혼용 4-10자리 이내"
              value={id}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>올바른 아이디를 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            로그인
          </button>
        </div>
        <ul className="find">
          <li><a className="find-text">아이디 찾기</a></li>
          <li><a className="find-text">비밀번호 찾기</a></li>
          <li><a className="find-text">회원 가입</a></li>
        </ul>
        <div className="social-login">
          <span className="social-login-title">간편 로그인</span>
          <div className="social-login-btn-container">
            <div className="social-login-btnwrapper">
              <a href="" className="kakao social-button">
                <Kakao/>
              </a>
              <a href="" className="naver social-button">
                <Naver/>
              </a>
              <a href="" className="facebook social-button">
                <Facebook/>
              </a>
              <a href="" className="gogle social-button">
                <Google/>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
}

export default Login;