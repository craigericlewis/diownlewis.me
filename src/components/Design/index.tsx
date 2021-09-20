import { FC } from 'react';
import styled from 'styled-components';
import DesignCard from './DesignCard';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 10px 0 10px;
  flex-wrap: wrap;
  height: 450px;
`;

const DesignSubMenuContainer: FC = () => {
  return (
    <OuterContainer>
      <DesignCard name='Graphic' href='design/graphic'/>
      <DesignCard name='Web' href='design/web'/>
      <DesignCard name='Product' href='design/web'/>
    </OuterContainer>
    
  );
};

export default DesignSubMenuContainer;