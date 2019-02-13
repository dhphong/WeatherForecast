<template>
  <div id="app">
    <h1>Weather</h1>
    <input v-model="place" placeholder="Nhap vi tri"></input> 
    <button  @click="updateWeather">Tim kiem</button>
   
    <div v-if="isSearch">
      <p>Danh sach: </p>
      <ul v-for="p in weather">
        <li @click="getWeatherInfo(p)" type="none">{{p.name}}</li>
      </ul>
    </div>
    <div v-else-if="isCurrent">
      <h3>{{weather.location.name}}</h3>
      <img :src="weather.current.condition.icon"/>
      <p>{{weather.current.condition.text}}</p>
      <p>{{weather.current.temp_c}}°C</p>
      <div  id="forecast">
        <div v-for="day in weather.forecast.forecastday">
          <img :src="day.day.condition.icon"/>
          <p>{{day.day.condition.text}}</p>
          <p>{{day.day.avgtemp_c}}°C</p>
        </div>
      </div>
    </div>
    <div v-else-if="isStart">
    <p>Dang xu ly.....</p>
    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const WEATHER_KEY = 'ed65d1a83de64345b24142107193001';
const FORECAST_DAYS = 5;

export default {
  name: 'app',
  data() {
    return {
      isSearch: false, 
      isCurrent: false,
      isStart: false,
      weather: {},
      place: ''
    }
  },
  methods: {
    updateWeather() {
      this.isSearch = false;
      this.isCurrent = false;
      if (this.place !== '')
      {
        this.isStart = true;
        axios
        .get("http://api.apixu.com/v1/search.json?key=" + WEATHER_KEY + "&q=" + this.place)
        .then((result) => {
          return result.data;
        }).then((data) => {
          this.weather = data;
        }).then(() => {
          if (this.weather.length)
          {
            this.isSearch = true;
            this.isStart = false;
          }
        }).catch((err) => {
          console.log(err);
        });
      }
      console.log('axios');
    },

    getWeatherInfo(place) {
      this.isSearch = false;
      this.isCurrent = false;
      this.isStart = true;
      this.place = place.name;
      axios
        .get("http://api.apixu.com/v1/forecast.json?key=" + WEATHER_KEY + "&q=" + this.place + "&days=" + FORECAST_DAYS)
        .then((result) => {
          return result.data;
        }).then((data) => {
          this.weather = data;
        }).then(() => {
          this.isCurrent = true;
          this.isStart = false;
        }).catch((err) => {
          console.log(err);
        });
    }

  },
  mounted() {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
