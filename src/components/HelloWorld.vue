<template>
  <div id="body">
    <div id="intro" class="intro">
      <img id="introText" src="../assets/IntroText.png">
    </div>
    <button id="scrollButton" @click="scrollToMyScroll">스크롤하기</button>
    <div id="myScroll" class="keyword">
      <div><img id="keywordText1" src="../assets/KeywordText1.png"></div>
      <img id="keywordText2" src="../assets/KeywordText2.png">
      <MyChips @send-data="getKeyword"/>
    </div>
    <MyStoryVue id= "myStory" @send-data="getMessages" :keyword="keyword"/>
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
      scrollToIntro(){
        const comp = document.getElementById("intro");
        if (comp) {
          comp.scrollIntoView({ behavior: 'smooth',block: 'start'});
        }
      },
      scrollToMyScroll(){
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
  .intro {height: 1080px; background-image: url(".././assets/IntroBack.png");
    background-size: cover;}
  .intro #introText {width: 936px; margin-top: 311px;}
  

  .keyword {height: 933px; background-color: #FEF8F1;border: 0; margin: 0;}
  .keyword #keywordText1 {width:859px; height: 80px; margin-top: 184px;}
  .keyword #keywordText2 {width:768px; height: 72px; margin-top: 40px;}
  
  .story {height: 1677px; background-color: #FF7C46;border: 0; margin: 0;}
  .story #storyStartText {color: var(--text-dark-400, rgba(255, 255, 255, 0.70));
text-align: center;
font-family: Pretendard;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 32px; margin-bottom: 128px;}
  .story #storyText {width: 684px; height: 80px; margin-top: 184px;}
  .story .rectangle {width: 1410px; height: 297px; background-color: #FEF8F1; margin: auto; margin-top: 60px; border-radius: 60px;}

  .talk {height: 1859px; background-color: #FEF8F1;border: 0; margin: 0;}
  .talk #talkText1 {width:910px; height: 80px; margin-top: 184px;}
  .talk #talkText2 {width:817px; height: 72px; margin-top: 40px; margin-bottom: 138px;}
  

</style>
