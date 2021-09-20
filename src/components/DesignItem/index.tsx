import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Text from '../Text';

interface Props {
  title: string;
  subtitle: string;
  year: string;
  image: string;
  width: number;
  height: number;
}

const GraphicItemContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 100px 10px 0 10px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const InnerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightContainer = styled.div`
  flex-shrink: 0;
`;

const DividingLine = styled.div`
  border: 1px solid;
  box-sizing: border-box;
  margin: 17px 0;
  width: 150px;
`;

const GraphicItem: FC<Props> = ({
  title,
  subtitle,
  year,
  image,
  width,
  height,
}) => {
  return (
    <GraphicItemContainer>
      <LeftContainer>
        <InnerLeftContainer>
          <Text>
            {title}
          </Text>
          <DividingLine/>
          <Text type='h4'>
            {subtitle}
          </Text>
          <Text type='body'>
            {year}
          </Text>
        </InnerLeftContainer>
      </LeftContainer>
      <RightContainer>
        {
          image && <Image src={image} width={width} height={height}/>
        }
      </RightContainer>
    </GraphicItemContainer>
  );
};

export default GraphicItem;