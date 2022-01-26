import React from "react";
import WeatherReport from "./weather";

type ForecastState = {
    latitude: number;
    longitude: number;
    apiUrl: string;
    apiKey: string;
    temperature: number;
};

class Weather extends React.Component<{}, ForecastState> {
    componentDidMount() {
        this.setState({
            apiKey: "16bfd0882021f8b50da9acac7d8ee70d",
            temperature: 0,
        });

        this.setLoc();
    }

    setLoc = () => {
        navigator.geolocation.getCurrentPosition((where) => {
            this.setState({
                latitude: where.coords.latitude,
                longitude: where.coords.longitude,
                apiUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${where.coords.latitude}&lon=${where.coords.longitude}&units=imperial&appid=${this.state.apiKey}`,
            });
        });
    };

    getWeather = () => {
        fetch(this.state.apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((weather) => {
                this.setState({
                    temperature: weather.main.temp,
                });
                console.log(weather);
            })
            .catch((error) =>
                console.log("error:", error));
    };

    render() {
        return (
            <div className="App-header">
                <h2>Local Temps</h2>
                <div>
                    <button onClick={this.getWeather}>Click to see Forecast</button>
                    <WeatherReport temperature={this.state.temperature} />
                </div>
            </div>
        );
    }
}


export default Weather;