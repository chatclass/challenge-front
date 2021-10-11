import { Title } from '@/common';
import Head from 'next/head';
import { Wrapper } from './styles';

export const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title text="Weather App" />
    </Wrapper>
  );
};
