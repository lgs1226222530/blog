<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="forget-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
        placeholder="邮箱"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        发送验证到邮箱
      </a-button>
      <router-link to="/user/register" >未有账号，马上注册!</router-link>
      <router-link to="/user/login" class="login-form-forgot">
      已有账号，马上登录!
      </router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form, Input, Checkbox,Button } from 'ant-design-vue'

export default {
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    [Button.name]:Button
    },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //     console.log('Received values of form: ', values);
      //   }
      // });
    },
  },
};
</script>
<style>

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.forget-form{
    margin: 0% auto;
    width: 360px;
}
</style>