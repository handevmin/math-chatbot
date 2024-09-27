import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="welcome-message">
          <img src={process.env.PUBLIC_URL + '/hong-pt-profile.png'} alt="듣는 선생님 홍PT" className="mascot" />
          <h1>듣는 선생님 홍PT</h1>
          <br></br>
          <p>
            수학을 잘하려면 수학적 개념을 직접 설명하는 과정이 매우 중요하답니다! 💯
            자신이 푼 수학문제를 홍PT에게 설명해보세요!! 💁🏻‍♂ 
            <br></br>
            <br></br>
            설명에 부족한 부분이 있으면 홍PT가 여러분에게 힌트를 제공하고 질문을 던지며 완벽한 설명을 완성할 수 있도록 도와드립니다.
            <br></br>
            <br></br>
            24시간 여러분 곁을 지키는 과외선생님 홍PT에요!!! 👨🏻‍🏫
          </p>
        </div>
        <button className="start-chat-btn" onClick={() => navigate('/chat')}>
          채팅 시작하기
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
