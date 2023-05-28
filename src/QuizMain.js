import React from "react";
import './QuizMain.css'

function QuizMain(){
    return(
        <div className="QuizMain">
            <div className="quiz">
                <h4>문장 {'>'} 수어 통역하기</h4>
                <div>단어 또는 문장을 입력하여</div>
                <div>그에 대응되는 수어가 무엇인지</div>
                <div>확인해보세요.</div>
            </div>
            <div className="quiz"></div>
        </div>
    );
}