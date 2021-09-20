import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../theme';
import Page from '../components/Core/Page';
import Design from '../components/Design';
import Meta from '../components/Core/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <ThemeContext.Provider value={theme}>
        <Page name={'Design'}>
          <Design/>
        </Page>
      </ThemeContext.Provider>
    </>
  );
}

export default Home;
