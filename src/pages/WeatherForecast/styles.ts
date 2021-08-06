import styled from "styled-components";

export const WeatherForecastContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;

    padding: 6.4rem 0;
    border-bottom: 1px solid #fff;

    h1 {
        font-size: 5.6rem;
        color: #fff;
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
