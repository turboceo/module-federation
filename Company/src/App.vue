<template>
    <div>
        <Header></Header>
        <h1>Our Application Homepage</h1>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: "App",

    components: {
        Header,
    },

    created() {
        console.log('created...')
        console.log(this.$store)
    }
}
</script>

<style scoped>

</style>

