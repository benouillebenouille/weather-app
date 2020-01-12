

export class WeatherService {

    

    static getWeather() {
        return WeatherService;

        
    }

    static get(city) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b13ce98f5d2582ec3975bfd2870ec78a`);
            xhr.onload = xhr.onerror = () => {
                if (200 === xhr.status) {
                    return resolve(JSON.parse(xhr.response));
                }
                reject(xhr);
            };
            xhr.send();
        });
    }


}