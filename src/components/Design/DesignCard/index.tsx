import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Text from '../../Text';

interface Props {
  href: string;
  name: string;
}

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const SubMenuImage = styled.div`
  height: 300px;
  width: 100%;
`;

const OuterContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 40px 50px 0;
  max-width: 450px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DesignCard: FC<Props> = ({
  href,
  name
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <OuterContainer>
      <Link href={href}>
        <Anchor
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <InnerContainer>
            <Text>
              {name}
            </Text>
            <SubMenuImage/>
          </InnerContainer>
        </Anchor>
      </Link>
    </OuterContainer>
  );
};

export default DesignCard;