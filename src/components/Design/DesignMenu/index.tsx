import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import DesignMenuItem from './DesignMenuItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Spacer = styled.div`
  display: absolute;
  bottom: 0;
`;

const DesignMenu: FC = () => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(window.location.pathname);
  });

  return (
    <Container>
      <DesignMenuItem name='Graphic' href='/design/graphic' selected={path === '/design/graphic'}/>
      <DesignMenuItem name='Web' href='/design/web' selected={path === '/design/web'}/>
      <DesignMenuItem name='Product' href='/design/product' selected={path === '/design/product'}/>
    </Container>
  );
};

export default DesignMenu;