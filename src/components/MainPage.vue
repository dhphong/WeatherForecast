<template>
    <div>
        <input-location></input-location>
        <div v-if="isSearch">
            <p>Danh sach:</p>
            <ul>
                <li
                    v-for="p in weather"
                    :key="p.id"
                    @click="loadWeatherInfo(p)"
                    type="none"
                >
                    {{ p.name }}
                </li>
            </ul>
        </div>
        <div v-else-if="isCurrent">
            <h3>{{ weather.location.name }}</h3>
            <img :src="weather.current.condition.icon" />
            <p>{{ weather.current.condition.text }}</p>
            <p>{{ weather.current.temp_c }}°C</p>
            <div id="forecast">
                <div
                    v-for="day in weather.forecast.forecastday"
                    :key="day.date"
                >
                    <img :src="day.day.condition.icon" />
                    <p>{{ day.day.condition.text }}</p>
                    <p>{{ day.day.avgtemp_c }}°C</p>
                </div>
            </div>
        </div>
        <div v-else-if="isStart">
            <p>Dang xu ly.....</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InputLocation from './InputLocation';

export default {
    name: 'MainPage',
    computed: {
        ...mapGetters(['isSearch', 'isCurrent', 'isStart', 'weather', 'place']),
        ...mapActions(['getWeatherInfo'])
    },
    components: {
        InputLocation
    },
    methods: {
        loadWeatherInfo(p) {
            this.$store.dispatch('getWeatherInfo', p);
        }
    }
};
</script>

<style scoped>
#forecast {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#forecast div {
    width: 10%;
}
</style>
