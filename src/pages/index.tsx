import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../theme';
import Head from 'next/head';
import Page from '../components/Core/Page';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dion Lewis</title>
        <meta property="og:title" content="Dion Lewis' personal website" />
        <meta
          name="description"
          content="Dion is a designer and a freshman at the Carnegie Mellon University"
        />
        <meta
          property="og:description"
          content="Dion is a designer and a freshman at the Carnegie Mellon University"
        />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeContext.Provider value={theme}>
        <Page/>
      </ThemeContext.Provider>
    </>
  );
}

export default Home
