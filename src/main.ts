import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//import router from "@/router";
import App from './App.vue';

// 国际化
import i18n from "@/lang/index";


const app = createApp(App);

// 注册全局组件
app.use(ElementPlus)
    .use(i18n)
    .mount('#app');

