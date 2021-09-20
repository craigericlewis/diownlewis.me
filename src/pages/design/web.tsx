import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../../theme';
import Page from '../../components/Core/Page';
import Web from '../../components/Web';
import Meta from '../../components/Core/Meta';

const WebPage: NextPage = () => {
  return (
    <>
      <Meta/>
      <ThemeContext.Provider value={theme}>
        <Page name={'Design'}>
          <Web/>
        </Page>
      </ThemeContext.Provider>
    </>
  );
}

export default WebPage;
