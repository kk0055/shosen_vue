import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top' //追記


Vue.use(Router)

export default new Router({
  mode: 'history',  // 追記 URLに#が入るのを防止
  base: 'test/vue-router-test', //追記 ベースURL 今回はサーバー内のサブディレクトリに保存したいため
  routes: [
    {
      path: '/',
      name: 'top', //追記
      component: Top //pagesフォルダ内のコンポーネント名
    },
  
  ]
})