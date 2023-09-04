<template>
  <div id="app">
    <!-- 추가된 헤더 컴포넌트 사용 -->
    <MyHeader></MyHeader>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
	
    <!-- 추가된 풋터 컴포넌트 사용 -->
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '@/components/common/MyHeader'; //import 헤더 추가
// import HelloWorld from './components/HelloWorld.vue'; 
import MyFooter from '@/components/common/MyFooter'; //import 풋터 추가

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 0;
}

template {padding: 0; margin: 0;}


</style>
