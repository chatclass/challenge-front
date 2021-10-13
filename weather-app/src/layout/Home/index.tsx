import { Text } from '@/common';
import { Capitals } from '@/common/Capitals';
import { Forecast } from '@/common/Forecast';
import { Line } from '@/styles/global';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, KeyboardEvent, useState } from 'react';
import {
  Wrapper,
  Input,
  ContentWrapper,
  InputWrapper,
  TitleWrapper,
} from './styles';

export const Home = () => {
  const inputValue = useRef<HTMLInputElement>({} as HTMLInputElement);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleEnterOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputValue.current?.blur();
      setSearchTerm(inputValue.current.value || null);
    }
  };

  const onForecastClose = () => {
    setSearchTerm(null);
    inputValue.current.value = '';
    inputValue.current.focus();
  };

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Just a weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Text text="Previsão do tempo" type={'h1'} reduced={!!searchTerm} />
          </TitleWrapper>
          {searchTerm && (
            <Forecast city={searchTerm} onClose={onForecastClose} />
          )}
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
