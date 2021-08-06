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
        font-size: 5.2rem;
        color: #fff;
    }

    @media (max-width: 768px) {
        padding: 3.2rem 0;

        h1 {
            width: 75%;
        }

        h1.reduced {
            font-size: 3.2rem;
        }
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

    @media (max-width: 768px) {
        padding: 2.4rem 0;

        .day-state {
            padding: 0 6.4rem;
        }
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
        height: 1.8rem;
        width: 2.5rem;
    }

    .max img {
        color: #ff7f00;
        height: 1.8rem;
        width: 2.5rem;
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
    width: 90%;
    display: flex;

    input {
        flex: 9;
        height: 4px;

        background: #fff;
        padding: 2.4rem;

        font-size: 1.6rem;
        font-weight: 500;

        outline: none;
    }

    button {
        height: 4px;

        background: #fff;
        padding: 2.4rem 1.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    @media (max-width: 768px) {
        input {
            height: 6px;
            font-size: 2.4rem;
        }

        button {
            height: 6px;
        }
    }
`;
