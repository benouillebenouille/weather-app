import { ButtonComponent } from "../../shared/components/button/button.component";
import { TitleComponent } from "../../shared/components/title/title.component";
import { WeatherService } from "../../shared/services/weather.service";


export class IpWeatherComponent {

    constructor() {
        this.element = null;
        this.title = new TitleComponent("Get weather from Geolocation");
        this.buttonIp = new ButtonComponent("search from your local position");


    }

    display() {
        const form = document.createElement("form");
        this.element = document.createElement("app-ip");
        this.element.appendChild(form);
        this.title.display(form);
        this.buttonIp.display(form);
        this.buttonIp.elementSearch.addEventListener("click", (event) => this.searchIpOnClick(event));
        document.body.appendChild(this.element);
    }


    searchIpOnClick(event) {
        event.preventDefault();
        fetch("http://api.ipstack.com/78.193.240.64?access_key=b76a9778898df684ab11140531286fbb")
            .then(data => data.json())
            .then(json => {
                const ip = (json.ip);
                const city = (json.city);
                const region = (json.region_name);
                console.log(ip,region,city)
                WeatherService.get(city)
                .then(json=>
                    console.log(json));

            })

    }
}