import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../theme';
import Page from '../components/Core/Page';
import Art from '../components/Art';
import Meta from '../components/Core/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <ThemeContext.Provider value={theme}>
        <Page name={'Art'}>
          <Art/>
        </Page>
      </ThemeContext.Provider>
    </>
  );
}

export default Home;
