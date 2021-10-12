import { Text } from '@/common';
import { Capitals } from '@/common/Capitals';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, KeyboardEvent } from 'react';
import {
  Wrapper,
  Line,
  Input,
  ContentWrapper,
  InputWrapper,
  TitleWrapper,
} from './styles';

export const Home = () => {
  const inputValue = useRef<HTMLInputElement>(null);

  const handleEnterOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('ENTER', inputValue.current?.value);
    }
  };

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Text text="Previsão do tempo" type={'h1'} />
          </TitleWrapper>
          <InputWrapper>
            <Input
              placeholder="Insira aqui o nome da cidade"
              onKeyPress={handleEnterOnSearch}
              ref={inputValue}
            />
            <Image src="/search.svg" alt="search icon" height={24} width={24} />
          </InputWrapper>
          <Line />
          <Capitals />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};
