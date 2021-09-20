import type { NextPage } from 'next';
import theme, { ThemeContext }  from '../../theme';
import Page from '../../components/Core/Page';
import Graphic from '../../components/Graphic';
import Meta from '../../components/Core/Meta';

const GraphicPage: NextPage = () => {
  return (
    <>
      <Meta/>
      <ThemeContext.Provider value={theme}>
        <Page name={'Design'}>
          <Graphic/>
        </Page>
      </ThemeContext.Provider>
    </>
  );
}

export default GraphicPage;
