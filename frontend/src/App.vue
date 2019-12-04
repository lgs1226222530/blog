<template>
  <div id="app">
    <div class="layout">
      <a-layout>
      <a-layout-header>
        <a-menu>
          <a-menu-item>
            <router-link to="/">Blog</router-link>  
          </a-menu-item>
          <a-menu-item>
            <router-link to="/Login">Login</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
    </div>
  </div>
</template>
<script>
import { Layout,Menu } from "ant-design-vue"
  export default {
    components: {
      [Layout.name]: Layout,
      [Menu.name]: Menu
    }
  };
</script>

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

</style>
