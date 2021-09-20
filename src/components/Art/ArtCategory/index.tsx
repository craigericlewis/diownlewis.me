import { FC } from 'react';
import styled from 'styled-components';
import Text from '../../Text';

interface Props {
  name: string
}

const CategoryName = styled(Text)`
  margin-bottom: 50px;
`;

const OuterContainer = styled.div`
  margin-bottom: 25px;
`

const ArtCategory: FC<Props> = ({children, name}) => {
  return (
    <OuterContainer>
      <CategoryName type='h3'>
        {name}
      </CategoryName>
      {children}
    </OuterContainer>
  );
};

export default ArtCategory;