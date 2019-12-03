<template>
  <div id="app">
    <div class="nav">
      <div class="nav__left">
        <router-link to="/">Blog</router-link>
      </div>
      <div>
        <router-link to="/">Home</router-link>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  display: flex;
  padding: 30px;
  &__left{
   a{}
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
