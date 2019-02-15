<template>
    <div class="">
        <input v-model="place" placeholder="Nhap vi tri" />
        <button @click="update">Tim kiem</button>
    </div>
</template>

<script>
export default {
    name: 'InputLocation',
    methods: {
        update() {
            this.$store.dispatch('loadWeather');
        }
    },
    computed: {
        place: {
            get() {
                return this.$store.getters.place;
            },
            set(value) {
                return this.$store.dispatch('updatePlace', value);
            }
        }
    }
};
</script>
