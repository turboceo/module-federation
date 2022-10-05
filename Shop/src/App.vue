<template>
  <div>
    <Header></Header>
    <h1>Our Application Shoppage</h1>
    <div>
        <button @click="addItem">Add item</button>
    </div>
  </div>
</template>

<script>
import Header from "Company/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  methods: {
    addItem() {
      this.$store.commit('updateCartItems')
    },
  },
};
</script>

<style scoped>
</style>

