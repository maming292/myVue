<template>
  <div class="login">
    <button @click="go">登录</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "6666"
    };
  },
  methods: {
    go() {
      this.$router.push({path:"/index",query:{name:'denglu'}});
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
