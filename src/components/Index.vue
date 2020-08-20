<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Home'
    }
  },
  created(){
    console.log(this.$route.query.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
