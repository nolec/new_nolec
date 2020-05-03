import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const BoxRoom = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.theme.files.logo_back});
    background-color: #ffa600;
    ${(props) => props.theme.css.background}
    filter: drop-shadow(2px 4px 6px black);
    opacity: 0.6;
  }
  > div {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .logo_box {
    padding: 25px 0 10px;
    h3 {
      color: #ffa600;
      font-size: 40px;
      letter-spacing: 0.1em;
    }
  }
  .auth_box {
    padding: 10px 0 25px;
    .content {
      display: flex;
      width: 100%;
      justify-content: space-around;
      a {
        font-size: 16px;
        background-color: #ffa600;
        padding: 0 5px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        height: 24px;
        span {
          height: 100%;
          line-height: 26px;
        }
        &:hover {
          background-color: #fff;
        }
      }
    }
  }
`;

export default () => {
  return (
    <Wrapper className="box_wrapper">
      <BoxRoom>
        <div className="logo_box">
          <h3>8Street</h3>
        </div>
        <div className="auth_box">
          <div className="content">
            <a>
              <span>로그인</span>
            </a>
            <a>
              <span>회원가입</span>
            </a>
          </div>
        </div>
      </BoxRoom>
    </Wrapper>
  );
};
