import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Text from '../../Text';

interface Props {
  selected: boolean;
  href: string;
  name: string;
}

const TextContainer = styled(Text)`
  margin-right: 10px;
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const MenuItem: FC<Props> = ({
  selected,
  href,
  name,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <Anchor
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TextContainer
          selected={selected}
          type='menu'
          hovered={isHovered}
        >
          {name}
        </TextContainer>
      </Anchor>
    </Link>
  ); 
}

export default MenuItem;