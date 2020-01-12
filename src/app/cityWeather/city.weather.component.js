import { ButtonComponent } from "../../shared/components/button/button.component";
import { InputComponent } from "../../shared/components/input/input.component";
import { TitleComponent } from "../../shared/components/title/title.component";
import { WeatherService } from "../../shared/services/weather.service";

export class CityWeatherComponent {

    constructor() {
        this.element = null;
        this.weatherShow = null;
        this.city = "";
        this.title = new TitleComponent("Search for a location to get the local weather");
        this.input = new InputComponent(this.city);
        this.button = new ButtonComponent("Search");
        this.weatherService = new WeatherService();
    }

    display() {
        const form = document.createElement("form");
        this.element = document.createElement("app-home");
        this.element.appendChild(form);
        this.title.display(form);
        this.input.display(form);
        this.button.display(form);
        this.button.elementSearch.addEventListener("click", (event) => this.searchOnClick(event));
        document.body.appendChild(this.element);
    }

    searchOnClick(event) {
        event.preventDefault();
        const city = this.input.city.value;
        // const temperatureDisplay = main.temp;
        // const descriptionDisplay=weather [0].description;
        // const cityDisplay=main.name;
        WeatherService.get(city)
            .then(data => {
                console.log(data);


            })
    }
}