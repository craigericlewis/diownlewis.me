import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';
import MenuItem from './MenuItem';
import DesignMenu from '../Design/DesignMenu'

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Spacer = styled.div`
  flex-grow: 2;
  width: 100%;
`;

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

const StyledDesignMenu = styled(DesignMenu)`
  flex-grow: 0;
  width: 100%;
`;

const Header: FC = () => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(window.location.pathname);
  });

  return (
    <OuterContainer>
      <HeaderContainer>
        <Image src='/logo.png' width={86} height={86}/>
        <MenuContainer>
          <Text type='name'> DION LEWIS </Text>
          <InnerContainer>
            <MenuItem selected={path === '/about'} href='/' name='About'/>
            <MenuItem selected={isDesignPage(path)} href='/design' name='Design'/>
            <MenuItem selected={path === '/art'} href='/art' name='Art'/>
            <MenuItem selected={path === '/contact'} href='/contact' name='Contact'/>
          </InnerContainer>
        </MenuContainer>
      </HeaderContainer>
      <Spacer/>
      {
        isDesignSubPage(path) && <StyledDesignMenu/>
      }
    </OuterContainer>
  );
};

const isDesignPage = (path: string) => (
  path.split('/')[1] === 'design'
)

const isDesignSubPage = (path: string) => (
  path === '/design/web' ||
  path === '/design/graphic' ||
  path === '/design/product'
)

export default Header;