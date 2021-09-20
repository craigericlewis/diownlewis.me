import { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme/index';
import Header from '../Header';

interface PageContainerProps {
  color: string;
}

interface Props {
  name: 'About' | 'Design' | 'Art' | 'Contact';
}

const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const InnerContainer = styled.div`
  background-color: ${({color}) => color}};
  position: relative;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Page: FC<Props> = ({ children, name }) => {
  return (
    <PageContainer color={theme.color.background}>
      <InnerContainer>
        <Header currentPage={name}/>
        {children}
      </InnerContainer>
    </PageContainer>
  );
};

export default Page;