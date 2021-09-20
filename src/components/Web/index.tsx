import { FC } from 'react';
import styled from 'styled-components';
import DesignItem from '../DesignItem';

const WebContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Web: FC = () => {
  return (
    <WebContainer>
      <DesignItem title='Website Design' subtitle='Personal' year='2021'/>
      <DesignItem title='Immigration Services' subtitle='Personal' year='2021'/>
    </WebContainer>
  );
};

export default Web;