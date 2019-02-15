<template>
    <div id="app">
        <h1>Weather</h1>
        <main-page></main-page>
    </div>
</template>

<script>
import MainPage from './components/MainPage';

export default {
    name: 'app',
    components: {
        MainPage
    }
};
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
</style>
