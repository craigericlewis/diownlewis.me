import { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import IconWrapper from './IconWrapper';

const SocialContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Socials: FC = () => {
  return (
    <SocialContainer>
      <IconWrapper 
        fill={theme.color.offBlack}
        hoverFill={theme.color.blue}
        sideLength={36}
        name="resume"
        onClick={() => {}}
        iconPadding="2px"
      />
      <IconWrapper 
        fill={theme.color.offBlack}
        hoverFill={theme.color.blue}
        sideLength={35}
        name="linkedin"
        onClick={() => {}}
        iconPadding="2px"
        iconMargin={"4px auto auto 2px"}
      />
    </SocialContainer>
  );
};

export default Socials;