import { Container } from "./styles";
import { WeatherForecast } from "../WeatherForecast";
import { Capitals } from "../Capitals";

export function Home() {
    return (
        <Container>
            <WeatherForecast />

            <Capitals />
        </Container>
    );
}
