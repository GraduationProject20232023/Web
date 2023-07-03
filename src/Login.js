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
  email: 'test@example.com',
  pw: 'test2323@@@'
}

function Login(props){
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
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
      if(email === User.email && pw === User.pw) {
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
              placeholder="handy1234"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
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
        <hr className="social-login-line"/>
        <div className="social-login">
          <span className="social-login-title">간편 로그인</span>
          <div className="social-login-buttons">
            <div className="social-login-btnwrapper">
              <button className="kakao social-button">
                <Kakao/>
              </button>
            </div>
            <div className="social-login-btnwrapper">
              <button className="google social-button">
                <Google/>
              </button>
            </div>
            <div className="social-login-btnwrapper">
              <button className="facebook social-button">
                <Facebook/>
              </button>
            </div>
            <div className="social-login-btnwrapper">
              <button className="naver social-button">
                <Naver/>
              </button>
            </div>
          </div>
        </div>

      </div>
    );
}

export default Login;