import axios from 'axios';
import { FORECAST_DAYS, WEATHER_KEY } from '../constances/ConstantCommon';

const apiSearchLocation = place => {
    try {
        let response = axios.get(
            'http://api.apixu.com/v1/search.json?key=' +
                WEATHER_KEY +
                '&q=' +
                place
        );
        return response;
    } catch (e) {
        console.log(e);
    }
};

const apiGetWeatherForecast = place => {
    try {
        return axios.get(
            'http://api.apixu.com/v1/forecast.json?' +
                'key=' +
                WEATHER_KEY +
                '&q=' +
                place +
                '&days=' +
                FORECAST_DAYS
        );
    } catch (e) {
        console.log(e);
    }
};
export { apiSearchLocation, apiGetWeatherForecast };
