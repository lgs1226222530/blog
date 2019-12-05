<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'mail',
          { 
            rules: [
            { type: 'email', message: '这不是一个正确的邮箱'},
            { required: true, message: '请输入您的邮箱！' }
          ] 
          },
        ]"
        placeholder="邮箱"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入您的昵称！' }] },
        ]"
        placeholder="昵称"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { 
            rules: 
            [
            { required: true, message: '请输入密码!' },
            { validator: validateToNextPassword}
            ] 
          },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'confirm',
          {
             rules: 
            [
             { required: true, message: '请再次确认密码!' },
             { validator: compareToFirstPassword}
            ] 
          },
        ]"
        type="password"
        placeholder="确认密码"
        @blur="handleConfirmBlur"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        注册
      </a-button>
      <router-link to="/user/Forgetpassword" class="login-form-forgot">
      忘记密码?
      </router-link>
      <router-link to="/user/login">已有账号，马上登录!</router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form, Input, Checkbox,Button } from 'ant-design-vue'

export default {
  name: 'Register',
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
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('您输入的两个密码不一致!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
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
.login-form{
    margin: 0% auto;
    width: 360px;
}
</style>