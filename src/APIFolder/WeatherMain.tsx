import React from "react";
import WeatherReport from "./WeatherReport";

type ForecastState = {
    latitude: number;
    longitude: number;
    apiUrl: string;
    apiKey: string;
    temp: number
};

class Weather extends React.Component<{}, ForecastState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            temp: 0,
            apiKey: "16bfd0882021f8b50da9acac7d8ee70d",
            apiUrl: ""
        }
    }
    componentDidMount() {
        // this.setState({
        //     apiKey: "16bfd0882021f8b50da9acac7d8ee70d",
        //     temp: 0,
        // });

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
                    temp: weather.main.temp,
                });
                console.log(this.state.temp)
                console.log(weather.main);
            })
            .catch((error) =>
                console.log("error:", error));
    };

    render() {
        console.log(typeof this.state.temp)
        return (
            <div className="App-header">
                <h2>Local Temps</h2>
                <div>
                    <button onClick={this.getWeather}>Click to see Forecast</button>
                    <WeatherReport temperature={this.state.temp} />
                    <h1>
                        {this.state.temp > 0 ? this.state.temp : null}
                    </h1>
                </div>
            </div>
        );
    }
}


export default Weather;