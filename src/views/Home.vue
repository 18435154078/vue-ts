<template>
  <div>
    {{ token }}
  </div>
</template>
<script setup lang="ts">
import { login, userInfo } from '@/api/user'
import { onMounted } from 'vue';
import userStore from '@/store/module/user'
const token = ref('')

const store = userStore()

async function toLogin() {
  const res = await login({
    username: 'admin',
    password: '111111'
  })
  store.SET_TOKEN(res.data)
}

async function getUserInfo() {
  const res = await userInfo()
  store.SET_USER_INFO(res.data)
}

onMounted(async () => {
  await toLogin()
  getUserInfo()
})

</script>
<style scoped></style>
