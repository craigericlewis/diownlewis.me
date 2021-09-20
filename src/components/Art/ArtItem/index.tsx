import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Text from '../../Text';

interface Props {
  title: string;
  type: string;
  description: string;
  descriptionPosition: 'bottom' | 'right';
  titlePosition: 'top' | 'right';
  image: string;
  width: number;
  height: number;
}

interface BottomDescriptionProps {
  width: number
}

const OuterContainer = styled.div`
  margin-bottom: 50px;
`;

const BottomContainer = styled.div`
  text-align: center;
`;

const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TopContainer = styled.div`

`;

const TopDescription = styled(Text)`
  margin-bottom: 4px;
`;

const LeftContainer = styled.div`

`;

const RightContainer = styled.div`
  display: flex;
  margin-left: 5px;
  flex-direction: column-reverse;
`;

const RightTextContainer = styled.div`

`;

const RightDescription = styled(Text)`
  margin-bottom: 75px;
`;

const BottomDescription = styled(Text)<BottomDescriptionProps>`
  ${({width}) => `width: ${width}px;`}
  margin-top: 2px;
`;

const ImageContainer = styled.div<BottomDescriptionProps>`
  ${({width}) => `width: ${width}px;`}
  flex-grow: 0;
  flex-shrink: 0;
`;

const ArtItem: FC<Props> = ({
  title,
  type,
  description,
  descriptionPosition,
  titlePosition,
  image,
  width,
  height,
}) => {
  return (
    <OuterContainer>
      <TopContainer>
        {
          titlePosition === 'top' &&
          (
            <>
              <Text type='h4'>
                {title}
              </Text>
              <TopDescription type='body'>
                {type}
              </TopDescription>
            </>
          )
        }
      </TopContainer>
      <MidContainer>
        <LeftContainer/>
        <ImageContainer width={width}>
          <Image src={image} width={width} height={height}/>
        </ImageContainer>
        <RightContainer>
          <RightTextContainer>
            {
              titlePosition === 'right' &&
              (
                <>
                  <Text type='h4'>
                    {title}
                  </Text>
                  <RightDescription type='body'>
                    {type}
                  </RightDescription>
                </>
              )
            }
            {
              descriptionPosition === 'right' &&
              (
                <>
                  <Text type="body">
                    {description}
                  </Text>
                </>
              )
            }
          </RightTextContainer>
        </RightContainer>
      </MidContainer>
      <BottomContainer>
        {
          descriptionPosition === 'bottom' &&
          (
            <BottomDescription type='body' align='center' width={width}>
              {description}
            </BottomDescription>
          )
        }
      </BottomContainer>
    </OuterContainer>
  );
};

export default ArtItem;