<template>
  <a-form :form="form" @submit="handleSubmit" class="register-form">
    <a-form-item v-bind="formItemLayout">
      <span slot="label">
        昵称&nbsp;
        <a-tooltip title="您希望您的朋友怎么称呼您呢?">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input
        v-decorator="[
          '昵称',
          {
            rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="邮箱">
      <a-input
        v-decorator="[
          '邮箱',
          {
            rules: [
              {
                type: 'email',
                message: '请输入正确的邮箱！',
              },
              {
                required: true,
                message: '请输入您的邮箱！',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="密码">
      <a-input
        v-decorator="[
          '密码',
          {
            rules: [
              {
                required: true,
                message: '请输入您的密码!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码">
      <a-input
        v-decorator="[
          '确认',
          {
            rules: [
              {
                required: true,
                message: '请重复您的密码！',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { Form, Input, Checkbox,Button,Tooltip,Icon } from 'ant-design-vue'
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default {
  components:{
      [Icon.name]: Icon,
      [Tooltip.name]: Tooltip,
      [Form.name]: Form,
      [Form.Item.name]: Form.Item,
      [Input.name]: Input,
      [Checkbox.name]: Checkbox,
      [Button.name]:Button
  },
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
//   beforeCreate() {
//     this.form = this.$form.createForm(this, { name: 'register' });
//   },
//   methods: {
//     handleSubmit(e) {
//       e.preventDefault();
//       this.form.validateFieldsAndScroll((err, values) => {
//         if (!err) {
//           console.log('Received values of form: ', values);
//         }
//       });
//     },
    // handleConfirmBlur(e) {
    //   const value = e.target.value;
    //   this.confirmDirty = this.confirmDirty || !!value;
    // },
    // compareToFirstPassword(rule, value, callback) {
    //   const form = this.form;
    //   if (value && value !== form.getFieldValue('password')) {
    //     callback('两个密码不相同!');
    //   } else {
    //     callback();
    //   }
    // },
    // validateToNextPassword(rule, value, callback) {
    //   const form = this.form;
    //   if (value && this.confirmDirty) {
    //     form.validateFields(['confirm'], { force: true });
    //   }
    //   callback();
    // },
//     handleWebsiteChange(value) {
//       let autoCompleteResult;
//       if (!value) {
//         autoCompleteResult = [];
//       } else {
//         autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
//       }
//       this.autoCompleteResult = autoCompleteResult;
//     },
//   },
};
</script>
<style lang="less">
.register-form{
    margin: 0% auto;
    width: 480px;
}
</style>