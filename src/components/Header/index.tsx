import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';

const HeaderContainer = styled.div`
  margin-top: 100px;
`;

const MenuContainer = styled.div`
  display: flex; 
  margin: 26px auto auto 12px;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  margin-top: 7px;
  display: flex;
`;

const MenuItem = styled(Text)`
  margin-right: 10px;
`;

interface Props {
  currentPage: "About" | "Design" | "Art" | "Contact";
};

const Header: FC<Props> = ({currentPage}) => {
  return (
    <HeaderContainer>
      <Image src="/logo.png" width={86} height={86}/>
      <MenuContainer>
        <Text type="name"> DION LEWIS </Text>
        <InnerContainer>
          <MenuItem selected={currentPage === "About"} type="menu">About</MenuItem>
          <MenuItem selected={currentPage === "Design"} type="menu">Design</MenuItem>
          <MenuItem selected={currentPage === "Art"} type="menu">Art</MenuItem>
          <MenuItem selected={currentPage === "Contact"} type="menu">Contact</MenuItem>
        </InnerContainer>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;