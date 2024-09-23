import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleQuestionClick = (question) => {
    navigate('/chat', { state: { initialQuestion: question } });
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="welcome-message">
          <img src={process.env.PUBLIC_URL + '/math-bot-image.png'} alt="수학 도우미 챗봇" className="mascot" />
          <h1>수학 도우미 챗봇</h1>
          <p>수학 문제 해결을 도와드릴게요. 무엇이든 물어보세요!</p>
        </div>
        <div className="suggested-questions">
          <h2>자주 묻는 질문</h2>
          <button onClick={() => handleQuestionClick("이차방정식을 어떻게 풀어야 하나요?")}>
            "이차방정식을 어떻게 풀어야 하나요?"
          </button>
          <button onClick={() => handleQuestionClick("피타고라스 정리가 무엇인가요?")}>
            "피타고라스 정리가 무엇인가요?"
          </button>
          <button onClick={() => handleQuestionClick("미분과 적분의 차이점은 무엇인가요?")}>
            "미분과 적분의 차이점은 무엇인가요?"
          </button>
          <button onClick={() => handleQuestionClick("삼각함수의 기본 개념을 설명해주세요.")}>
            "삼각함수의 기본 개념을 설명해주세요."
          </button>
        </div>
        <button className="start-chat-btn" onClick={() => navigate('/chat')}>
          채팅 시작하기
        </button>
      </div>
    </div>
  );
}

export default LandingPage;