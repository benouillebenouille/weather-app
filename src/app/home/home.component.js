import { CityWeatherComponent } from "../cityWeather/city.weather.component";
import { IpWeatherComponent } from "../ipWeather/ip.weather.component";

export class HomeComponent {

    constructor() {

        this.cityWeather = new CityWeatherComponent();
        this.ipWeather = new IpWeatherComponent();

    }

    display() {
        this.cityWeather.display();
        this.ipWeather.display();

    }
}

