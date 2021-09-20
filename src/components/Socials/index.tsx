import { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import IconWrapper from './IconWrapper';

const SocialContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

const Socials: FC = () => {
  return (
    <SocialContainer>
      <IconWrapper 
        fill={theme.color.offBlack}
        hoverFill={theme.color.blue}
        sideLength={36}
        name='resume'
        onClick={() => {}}
        iconPadding='2px'
      />
      <IconWrapper 
        fill={theme.color.offBlack}
        hoverFill={theme.color.blue}
        sideLength={35}
        name='linkedin'
        onClick={() => {}}
        iconPadding='2px'
        iconMargin={'1px 0 0 4px'}
      />
      <IconWrapper 
        fill={theme.color.offBlack}
        hoverFill={theme.color.blue}
        sideLength={35}
        name='email'
        onClick={() => {}}
        iconPadding='2px'
        iconMargin={'1px auto auto 4px'}
      />
    </SocialContainer>
  );
};

export default Socials;