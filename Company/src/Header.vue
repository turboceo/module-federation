<template>
 <div>
  <header class="header">
   App Header | Items: {{ cartCount }}
  </header>
 </div>
</template>

<script>
export default {
    name: "Header",

    computed: {
        cartCount() {
            return this.$store.state.cartItems
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    background: #f60;
    height: 50px;
    text-align: center;
    font-size: 36px;
    color: #fff;
}
</style>