import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { getCapitals } from '../../api/capitals'
import Heading from '../../components/Heading'
import TextField from '../../components/TextField'
import Weather from '../../components/Weather'
import { useWeather, Weather as WeatherProps } from '../../hooks/useWeather'
import * as S from './styles'
import SearchIcon from './searchIcon'

export default function WeatherPage() {
  const { weather, setWeather, handleSearch, error } = useWeather()
  const [capitals, setCapitals] = useState<WeatherProps[]>([])

  useEffect(() => {
    const loadCapitals = async () => {
      try {
        const capitals = await getCapitals()
        setCapitals(capitals)
      } catch (e) {
        console.error(e)
      }
    }

    loadCapitals()
  }, [])

  const handleClose = useCallback(() => {
    setWeather(undefined)
  }, [setWeather])

  return (
    <S.Wrapper>
      <S.Container>
        <Heading as="h1" color="light">
          Previsão do tempo
        </Heading>
      </S.Container>

      {weather?.city && <Weather {...weather} handleClose={handleClose} />}

      <S.Container>
        <TextField
          autoFocus
          placeholder="Insira aqui o nome da cidade"
          iconPosition="right"
          icon={SearchIcon}
          onInputChange={handleSearch}
          error={error!}
        />
      </S.Container>

      {capitals.length ? (
        <>
          <S.Hr />

          <S.Container>
            <Heading as="h3" color="light">
              Capitais
            </Heading>

            <S.Dl title="Weather capitals">
              <div>
                <S.Dt>
                  <span>Min</span>
                  <span>Máx</span>
                </S.Dt>
                {capitals.map((capital: WeatherProps) => (
                  <S.Dd key={`${capital.city}-${capital.wind}`}>
                    <span>{capital.min}</span>
                    <span>{capital.max}</span>
                    <span>{capital.city}</span>
                    <span>Vento {capital.wind}</span>
                  </S.Dd>
                ))}
              </div>
            </S.Dl>
          </S.Container>
        </>
      ) : null}
    </S.Wrapper>
  )
}
