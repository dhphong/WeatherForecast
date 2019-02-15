import {
    apiSearchLocation,
    apiGetWeatherForecast
} from '../service/WeatherService';

const loadWeather = async function({ commit, getters }) {
    commit('disableSearch');
    commit('disableCurrent');
    if (getters.place !== '') {
        commit('enableStart');
        let response = await apiSearchLocation(getters.place);
        console.log(response);
        commit('updateWeather', response.data);

        if (getters.weather.length !== 0) {
            commit('enableSearch');
        }
        commit('disableStart');
    }
};

const getWeatherInfo = async function({ commit, getters }, place) {
    commit('disableSearch');
    commit('disableCurrent');
    commit('enableStart');
    commit('updatePlace', place.name);
    let response = await apiGetWeatherForecast(getters.place);
    commit('updateWeather', response.data);
    commit('enableCurrent');
    commit('disableStart');
};
const updatePlace = ({ commit }, place) => {
    commit('updatePlace', place);
};

export {
    loadWeather,
    getWeatherInfo,
    updatePlace
};
