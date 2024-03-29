<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form-header center">
        <h1>登录</h1>
      </div>
      <div class="login-form-body center">
        <el-form :model="form" :rules="rules" label-width="80px" class="demo-ruleForm" ref="ruleFormRef">
          <el-form-item label="username" prop="username">
            <el-input v-model.lazy="form.username" type="text" placeholder="Please enter your phone"
              :prefix-icon="User" autocomplete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input v-model.lazy="form.password" :prefix-icon="Lock" type="password"
              placeholder="Please enter your password" autocomplete="off" @keyup.enter="postLogin" show-password />
          </el-form-item>
          <el-form-item prop="checked">
            <el-checkbox label="我已阅读并同意" v-model="form.checked" />
            <RouterLink to="/" style="margin-left: 5px; color: #8b51fd" target="_blank">
              后台管理协议
            </RouterLink>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-form-footer center">
        <el-button type="primary" @click="postLogin(ruleFormRef)">登录</el-button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { login, userInfo } from '@/api/user'
import { User, Lock } from '@element-plus/icons-vue'
import { FormInstance } from 'element-plus';
import userStore from '@/store/module/user';

const store = userStore()
const form = reactive({
  username: 'admin',
  password: '111111',
  checked: false
})

const ruleFormRef = ref<FormInstance>()

const rules = {
  username: [
    { required: true, message: 'Please enter your phone', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'blur' }
  ],
  checked: [
    { validator(_, value: boolean) { return value == true }, message: 'Please check', trigger: 'change' }
  ]
}

async function postLogin(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const cloneForm = { ...form }
      delete cloneForm.checked
      const { data: token } = await login(cloneForm)
      store.SET_TOKEN(token)
      const res = await userInfo()
      console.log(res)
    } else {
      console.log('error submit!', fields)
    }
  })
}


</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    color: white;
    border-radius: 20px;
    position: fixed;
    width: 550px;
    height: 370px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form-header {
    height: 100px;

    h1 {
      color: black;
      font-weight: 900;
    }
  }

  .login-form-body {
    display: flex;
    flex-direction: column;
    height: 200px;

    .demo-ruleForm {
      width: 500px;

      .el-input {
        height: 40px;
      }
    }
  }

  .login-form-footer {
    .el-button {
      width: 400px;
      height: 35px;
    }
  }
}
</style>