import React, { ReactEventHandler } from 'react'
import Heading from '../Heading'
import * as S from './styles'

type Forecast = {
  day: string
  min: string
  max: string
}

type WeatherProps = {
  city: string
  temperature: string
  min: string
  max: string
  sensation?: string
  wind: string
  humidity: string
  forecast?: Forecast[]
  handleClose?: ReactEventHandler
}

export default function Weather({
  city,
  temperature,
  min,
  max,
  sensation,
  wind,
  humidity,
  forecast,
  handleClose
}: WeatherProps) {
  return (
    <S.Wrapper>
      <Heading as="h5">{city}</Heading>

      <S.Close onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </S.Close>

      <Heading as="h2">{temperature}</Heading>

      <S.Items>
        <S.Item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
          </svg>
          <span>
            <b>{min}</b>
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
          </svg>
          <span>
            <b>{max}</b>
          </span>
        </S.Item>
        {sensation && (
          <S.Item>
            <span>
              Sensação <b>{sensation}</b>
            </span>
          </S.Item>
        )}
      </S.Items>
      <S.Items>
        <S.Item>
          <span>
            Vento <b>{wind}</b>
          </span>
        </S.Item>
        <S.Item>
          <span>
            Himidade <b>{humidity}</b>
          </span>
        </S.Item>
      </S.Items>

      <S.Hr />

      <S.Forecast>
        {forecast?.map((item) => (
          <S.Day key={`${item.day}-${item.min}`}>
            <b>{item.day}</b>
            <span>
              {item.min} {item.max}
            </span>
          </S.Day>
        ))}
      </S.Forecast>
    </S.Wrapper>
  )
}
