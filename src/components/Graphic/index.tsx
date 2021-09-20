import { FC } from 'react';
import styled from 'styled-components';
import GraphicItem from '../DesignItem';

const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Graphic: FC = () => {
  return (
    <GraphicContainer>
      <GraphicItem 
        title='Logo Design'
        subtitle='Personal'
        year='2021'
        image='/design/graphic/logo.png'
        width={600}
        height={400}
      />
      <GraphicItem
        title='Book Cover Red-Design'
        subtitle='Personal'
        year='2021'
      />
    </GraphicContainer>
  );
};

export default Graphic;