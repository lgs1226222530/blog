<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <router-link to="/" style="color:#FFF">
          <a-icon type="loading" />
          <span>Blog</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/user/login">
          <a-icon type="user" />
          <span>登录</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/">
          <a-icon type="bell" />
          <span>信息</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { Icon, Breadcrumb} from 'ant-design-vue'
  export default {
    components: {
      [Breadcrumb.name]: Breadcrumb,
      [Breadcrumb.Item.name]: Breadcrumb.Item,
      [Icon.name]: Icon
    },
    data() {
      return {
        collapsed: true,
      };
    },
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
.ant-layout{
  background: #FFF;
  &-footer{
    background: #FFF;
  }
}
</style>
