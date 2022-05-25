<template>
  <div class="login-container">
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
      label-position="left">
    </el-form> 
    <div class="title-container">
        <h3 class="title"></h3>
        <lang-select class="set-language" />
    </div>
    <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" :placeholder="$t('login.username')" name="username"
          type="text" tabindex="1" auto-complete="on" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">

import { onMounted, reactive, ref, toRefs, watch, nextTick } from "vue";

// 组件依赖
import { ElForm, ElInput } from "element-plus";
//import router from "@/router";
//import LangSelect from "@/components/LangSelect/index.vue";
//import SvgIcon from "@/components/SvgIcon/index.vue";

// 状态管理依赖
// import useStore from "@/store";

// API依赖
// import { getCaptcha } from "@/api/login";
// import { useRoute } from "vue-router";
import { LoginFormData } from "@/types";

//const { user } = useStore();
// const route = useRoute();

const loginFormRef = ref(ElForm);
const passwordRef = ref(ElInput);

const state = reactive({
  redirect: "",
  loginForm: {
    username: "admin",
    password: "123456"
  } as LoginFormData,
  loginRules: {
    username: [{ required: true, trigger: "blur" }],
    password: [
      { required: true, trigger: "blur", validator: validatePassword },
    ],
  },
  loading: false,
  passwordType: "password",
  captchaBase64: "",
  // 大写提示禁用
  capslockTooltipDisabled: true,
  otherQuery: {},
  clientHeight: document.documentElement.clientHeight,
  showCopyright: true,
});

function validatePassword(rule: any, value: any, callback: any) {
  if (value.length < 6) {
    callback(new Error("The password can not be less than 6 digits"));
  } else {
    callback();
  }
}

const {
  loginForm,
  loginRules,
  loading,
  passwordType,
  captchaBase64,
  capslockTooltipDisabled,
  showCopyright,
} = toRefs(state);

// function checkCapslock(e: any) {
//   const { key } = e;
//   state.capslockTooltipDisabled =
//     key && key.length === 1 && key >= "A" && key <= "Z";
// }

// function showPwd() {
//   if (state.passwordType === "password") {
//     state.passwordType = "";
//   } else {
//     state.passwordType = "password";
//   }
//   nextTick(() => {
//     passwordRef.value.focus();
//   });
// }

// function handleLogin() {
//   loginFormRef.value.validate((valid: boolean) => {
//     if (valid) {
//       state.loading = true;
//       user.login(state.loginForm)
//         .then(() => {
//           router.push({ path: state.redirect || "/", query: state.otherQuery });
//           state.loading = false;
//         })
//         .catch(() => {
//           state.loading = false;
//           handleCaptchaGenerate();
//         });
//     } else {
//       return false;
//     }
//   });
// }

// // 获取验证码
// function handleCaptchaGenerate() {
//   getCaptcha().then(({ data }) => {
//     const { img, uuid } = data;
//     state.captchaBase64 = "data:image/gif;base64," + img;
//     state.loginForm.uuid = uuid;
//   });
// }

// watch(
//   route,
//   () => {
//     const query = route.query;
//     if (query) {
//       state.redirect = query.redirect as string;
//       state.otherQuery = getOtherQuery(query);
//     }
//   },
//   {
//     immediate: true,
//   }
// );

// function getOtherQuery(query: any) {
//   return Object.keys(query).reduce((acc: any, cur: any) => {
//     if (cur !== "redirect") {
//       acc[cur] = query[cur];
//     }
//     return acc;
//   }, {});
// }

// onMounted(() => {
//   handleCaptchaGenerate();
//   window.onresize = () => {
//     if (state.clientHeight > document.documentElement.clientHeight) {
//       state.showCopyright = false;
//     } else {
//       state.showCopyright = true;
//     }
//   };
// });

</script>

