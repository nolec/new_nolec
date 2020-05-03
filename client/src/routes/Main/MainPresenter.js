import React from 'react';
import styled from 'styled-components';
import MainBox from '../../components/MainBox';

const Main = styled.main``;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;
const Content = styled.div`
  padding: 10px;
  margin-top: 30px;
`;

export default () => {
  return (
    <Main>
      <Container className="main_container">
        <Content className="main_content_box">
          <MainBox />
        </Content>
      </Container>
    </Main>
  );
};
