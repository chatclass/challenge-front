import styled from "styled-components";

export const WeatherForecastContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    padding: 6.4rem 0;
    border-bottom: 1px solid #fff;

    h1 {
        font-size: 5.6rem;
        color: #fff;
    }
`;

export const CitySearched = styled.div`
    width: 100%;

    background: #fff;
    padding: 2.4rem;

    .day-state {
        padding: 0 2.4rem;
        border-bottom: 1px solid #ff7f00;
    }

    .location {
        font-size: 1.6rem;
        font-weight: 600;
        color: #505050;
    }

    .clime-container {
        display: flex;
        gap: 2.4rem;

        font-size: 3.6rem;
        font-weight: 600;
        color: #505050;

        margin-top: 1.6rem;
    }
`;

export const ClimeInfos = styled.div`
    width: fit-content;
    padding: 2.4rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem 3.2rem;

    .min-max-temperature {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    span {
        font-size: 1.6rem;
    }

    .min {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .max {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .min img {
        color: #ff7f00;
        height: 18px;
        width: 25px;
    }

    .max img {
        color: #ff7f00;
        height: 18px;
        width: 25px;
    }

    .feels-like strong {
        margin-left: 0.8rem;
    }

    .wind strong {
        margin-left: 0.8rem;
    }

    .humidity strong {
        margin-left: 0.8rem;
    }
`;

export const SearchCities = styled.div`
    width: 80%;
    display: flex;

    input {
        flex: 9;
        height: 4rem;

        background: #fff;
        padding: 2.4rem;

        font-size: 1.6rem;
        font-weight: 500;

        outline: none;
    }

    button {
        height: 4rem;

        background: #fff;
        padding: 2.4rem 1.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }
`;
