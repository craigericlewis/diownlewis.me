import { FC, useState } from 'react';
import styled from 'styled-components';
import iconDict from '../../Icon';

interface IconProps {
  iconPadding?: string;
  iconMargin?: string;
}

interface State {
  isHovered: boolean;
}

const IconContainer = styled.div<IconProps>`
  padding: ${({ iconPadding }) => iconPadding};
  margin: ${({iconMargin}) => iconMargin};
`;

interface Props {
  fill: string;
  hoverFill: string;
  sideLength: number;
  name: string;
  onClick: () => void;
  iconPadding?: string;
  iconMargin?: string;
}

const IconWrapper: FC<Props> = ({
  fill,
  hoverFill,
  sideLength,
  name,
  onClick,
  iconPadding,
  iconMargin
}) => {
  const [isHovered, setIsHovered] = useState<State['isHovered']>(false);
  const color = isHovered ? hoverFill : fill;
  const Icon = iconDict(color, sideLength, name);
  return (
    <IconContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick()}
      iconPadding={iconPadding}
      iconMargin={iconMargin}
    >
      {Icon}
    </IconContainer>
  );
};

export default IconWrapper;