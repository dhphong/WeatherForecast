const enableSearch = (state) => {
    state.isSearch = true;
};
const disableSearch = (state) => {
    state.isSearch = false;
};
const enableCurrent = (state) => {
    state.isCurrent = true;
};
const disableCurrent = (state) => {
    state.isCurrent = false;
};
const enableStart = (state) => {
    state.isStart = true;
};
const disableStart = (state) => {
    state.isStart = false;
};
const updatePlace = (state, place) => {
    state.place = place;
};
const updateWeather = (state, weather) => {
    state.weather = weather;
};
export {
    enableSearch,
    disableSearch,
    enableCurrent,
    disableCurrent,
    enableStart,
    disableStart,
    updatePlace,
    updateWeather
};
