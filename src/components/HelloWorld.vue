<template>
  <div id="body">
    <div id="intro" class="intro">
      <div>
        <img id="introText" src="../assets/IntroText.png">
      </div>
      <img src="../assets/scroll.png" id="scrollButton" @click="scrollToMyScroll" class="scroll">
    </div>
    <div id="myScroll" class="keyword">
      <div><img id="keywordText1" src="../assets/KeywordText1.png" ></div>
      <img id="keywordText2" src="../assets/KeywordText2.png">
      <MyChips @send-data="getKeyword"/>
    </div>
    <MyStoryVue id= "myStory" @send-data="getMessages" :keyword="keyword" @scroll="myScroll"/>
    <div ref="myComponent"></div>
    <div id= "myConversation" class="talk">
      <img id="talkText1" src="../assets/TalkText1.png">
      <img id="talkText2" src="../assets/TalkText2.png">
      <MyConversation :value="messages"/>
      <ActionChip @send-data="getIsEnd"/>
    </div>

  </div>
</template>

<script>
import MyChips from './chips/MyChips'
import MyStoryVue from './story/MyStory.vue'
import MyConversation from './converstaion/MyConverstaion.vue';
import ActionChip from './converstaion/ActionChip.vue'

export default{
  mounted() {
    // Intersection Observer 객체 생성
    const options = {
      root: null, // 기본적으로 viewport를 루트로 사용
      rootMargin: "0px", // 루트 요소와 target 요소 사이의 마진
      threshold: 0.5, // 타겟이 루트와 얼마나 교차해야 하는지를 나타내는 값 (0부터 1까지)
    };

    this.observer = new IntersectionObserver(this.handleIntersection, options);

    // 특정 컴포넌트(ref) 관찰 시작
    const componentRef = this.$refs.myComponent;
    if (componentRef) {
      this.observer.observe(componentRef);
    }
  },
    data(){
        return{
            keyword:"",
            messages:{},
            isEnd: false,
            observer: null
        }
    },
    watch:{
      keyword(){
        this.scrollToMyStory()
      },
    },
    methods:{
      handleIntersection(entries) {
      // entries 배열에 관찰 대상에 대한 정보가 포함됩니다.
      // 여기서는 하나의 컴포넌트만 관찰하므로 entries[0]을 사용합니다.
      const entry = entries[0];
      if (entry.isIntersecting) {
        // 컴포넌트가 화면에 나타났을 때 호출할 함수를 여기에 호출합니다.
        this.callFunctionWhenComponentVisible();
        // 관찰 중지 (원하는 동작을 수행한 후에 관찰 중지할 수 있습니다.)
        //this.observer.unobserve(entry.target);
      }
    },
    callFunctionWhenComponentVisible() {
      this.scrollToMyConversation();
      console.log("컴포넌트가 화면에 나타났습니다!");
    },
      myScroll(){
        console.log("hello");
      },
      scrollToIntro(){
        const comp = document.getElementById("intro");
        if (comp) {
          comp.scrollIntoView({ behavior: 'smooth',block: 'start'});
        }
      },
      scrollToMyScroll(){
        console.log("hello world");
        const comp = document.getElementById("myScroll");
        if (comp) {
          comp.scrollIntoView({ behavior: 'smooth',block: 'start'});
        }
      },
      scrollToMyStory(){
        const comp = document.getElementById("myStory");
        if (comp) {
          comp.scrollIntoView({ behavior: 'smooth',block: 'start'});
        }
      },
      scrollToMyConversation(){
        const comp = document.getElementById("myConversation");
        if (comp) {
          window.scrollTo({
            top: comp.scrollHeight + 900,
            block: 'start',
            behavior:'smooth',
          });
        }
      },
        getKeyword(data){
            this.keyword = data
        },
        getMessages(data){
            this.messages = data;
        },
        getIsEnd(data){
          console.log("llll");
          this.isEnd = data;
          this.scrollToIntro()
        }
    },
    components:{
        MyChips,
        MyStoryVue,
        MyConversation,
        ActionChip,
    },
}
</script>

<style scoped>
  .scroll{
    width:75px !important;
    height:60px !important;
    margin-top:200px !important;
  }
  .intro { background-image: url(".././assets/IntroBack.png");
    background-size: cover;}
  .intro #introText {width: 700px; margin-top: 240px;}
  

  .keyword {height: 700px; background-color: #FEF8F1;border: 0; margin: 0;}
  .keyword #keywordText1 {width:650px; height: 55px; margin-top: 184px;}
  .keyword #keywordText2 {width:580px; height: 55px; margin-top: 40px;}

  .talk {height: 1859px; background-color: #FEF8F1;border: 0; margin: 0;}
  .talk #talkText1 {width:910px; height: 80px; margin-top: 184px;}
  .talk #talkText2 {width:817px; height: 72px; margin-top: 40px; margin-bottom: 138px;}
  

</style>
