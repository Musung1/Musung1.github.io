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
    <button id="scrollButton" @click="scrollToMyConversation">스크롤하기</button>
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
    data(){
        return{
            keyword:"",
            messages:{},
            isEnd: false
        }
    },
    watch:{
      keyword(){
        this.scrollToMyStory()
      },
    },
    methods:{
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
          comp.scrollIntoView({ behavior: 'smooth',block: 'start'});
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
