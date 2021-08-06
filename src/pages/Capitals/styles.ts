import styled from "styled-components";

export const CapitalsContainer = styled.div`
    width: 90%;

    padding: 2.4rem 0;

    h2 {
        font-size: 3.2rem;
        color: #fff;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 4.8rem;

            text-align: center;
        }
    }
`;
export const CapitalsWeather = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .min-max-labels {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        margin-top: 2.4rem;
        margin-bottom: 1.6rem;

        font-size: 1.6;
        color: #505050;
    }

    .cities {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        margin-bottom: 1.6rem;

        font-size: 1.6;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        font-size: 2.4rem;

        .second {
            display: none;
        }
    }
`;
