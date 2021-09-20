import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Text from '../../../Text';

interface Props {
  href: string;
  name: string;
  selected: boolean;
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const DesignMenuItem: FC<Props> = ({
  name,
  href,
  selected
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <Anchor
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text type='h2' selected={selected} hovered={isHovered}>
          {name}
        </Text>
      </Anchor>
    </Link>
  );
};

export default DesignMenuItem;