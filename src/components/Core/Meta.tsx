import { FC } from 'react';
import Head from 'next/head';

const Meta: FC = () => (
  <Head>
    <title>Dion Lewis</title>
    <meta property='og:title' content={'Dion Lewis\' personal website'} />
    <meta
      name='description'
      content='Dion is a designer and a freshman at the Carnegie Mellon University'
    />
    <meta
      property='og:description'
      content='Dion is a designer and a freshman at the Carnegie Mellon University'
    />
    <meta property='og:type' content='website' />
  </Head>
)

export default Meta;