import { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme/index';
import Header from '../Header';

interface PageContainerProps {
  color: string;
}

const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  background-color: ${({color}) => color}};
  height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const InnerContainer = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Page: FC = ({ children }) => {
  return (
    <PageContainer color={theme.color.background}>
      <InnerContainer>
        <Header currentPage="About"/>
        {children}
      </InnerContainer>
    </PageContainer>
  );
};

export default Page;